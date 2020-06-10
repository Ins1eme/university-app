<template src="./learn-form-editor.html"> </template>
<style lang="scss" src="./learn-form-editor.scss" scoped> </style>

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
            learnForm: (state) => state.learnForm.learnForm
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
            return this.learnForm.id ? 'Змінити' : 'Створити'
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.learnForm.id) {
                this.$store.dispatch('learnForm/editLearnForm', this.learnForm)
            } else {
                this.$store.dispatch('learnForm/createLearnForm', this.learnForm)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
