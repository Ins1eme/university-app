<template src="./task-editor.html"> </template>
<style lang="scss" src="./task-editor.scss" scoped> </style>

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
        },
        lessonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState({
            task: (state) => state.task.task
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
            return this.task.id ? 'Змінити' : 'Створити'
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;
        
            if (this.task.id) {
                this.$store.dispatch('task/editTask', this.task)
            } else {
                this.$store.dispatch('task/createTask', {
                    task: this.task,
                    lessonId: this.lessonId
                })
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
