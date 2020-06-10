<template src="./cathedra-editor.html"> </template>
<style lang="scss" src="./cathedra-editor.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation, VDatePickerWithValidation, VSelectWithValidation } from '@/views/components';
import { mapState } from 'vuex';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
        VSelectWithValidation,
        VDatePickerWithValidation
    },
    props: {
        value: {
            type: Boolean
        }
    },
    computed: {
        ...mapState({
            facultiesList: (state) => state.data.facultiesList,
            cathedra: (state) => state.cathedra.cathedra
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
            return this.cathedra.id ? 'Змінити' : 'Створити'
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.cathedra.id) {
                this.$store.dispatch('cathedra/editCathedra', this.cathedra)
            } else {
                this.$store.dispatch('cathedra/createCathedra', this.cathedra)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
