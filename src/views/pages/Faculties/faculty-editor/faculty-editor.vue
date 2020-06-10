<template src="./faculty-editor.html"> </template>
<style lang="scss" src="./faculty-editor.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation, VDatePickerWithValidation } from '@/views/components';
import { mapState } from 'vuex';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
        VDatePickerWithValidation
    },
    props: {
        value: {
            type: Boolean
        }
    },
    computed: {
        ...mapState({
            faculty: (state) => state.faculty.faculty
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
            return this.faculty.id ? 'Змінити' : 'Створити'
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.faculty.id) {
                this.$store.dispatch('faculty/editFaculty', this.faculty)
            } else {
                this.$store.dispatch('faculty/createFaculty', this.faculty)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
