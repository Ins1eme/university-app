<template src="./group-editor.html"> </template>
<style lang="scss" src="./group-editor.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation, VSelectWithValidation } from '@/views/components';
import { mapState } from 'vuex';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
        VSelectWithValidation
    },
    props: {
        value: {
            type: Boolean
        }
    },
    computed: {
        ...mapState({
            cathedrasList: (state) => state.data.cathedrasList,
            group: (state) => state.group.group
        }),
        editorDialog: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        },
        buttonText() {
            return this.group.id ? 'Змінити' : 'Створити'
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.group.id) {
                this.$store.dispatch('group/editGroup', this.group)
            } else {
                this.$store.dispatch('group/createGroup', this.group)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
