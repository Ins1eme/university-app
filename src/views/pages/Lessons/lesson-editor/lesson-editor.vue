<template src="./lesson-editor.html"> </template>
<style lang="scss" src="./lesson-editor.scss" scoped> </style>

<script>

import debounce from 'debounce';
import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation, VAutocompleteWithValidation } from '@/views/components';
import { mapState } from 'vuex';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
        VAutocompleteWithValidation
    },
    props: {
        value: {
            type: Boolean
        }
    },
    data: () => ({
        query: null,
    }),
    computed: {
        ...mapState({
            teachersList: (state) => state.data.teachersList,
            groupsList: (state) => state.data.groupsList,
            lesson: (state) => state.lesson.lesson
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
            return this.lesson.id ? 'Змінити' : 'Створити'
        }
    },
    watch: {
        query: debounce(function(val) {
            if (val && val.length >= 3) {
                this.getTeachersList(val)
            }
        }, 500)
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.lesson.id) {
                this.$store.dispatch('lesson/editLesson', {
                    ...this.lesson,
                    groupsIds: this.lesson.groupsIds.map(it => it.id)
                })
            } else {
                this.$store.dispatch('lesson/createLesson', this.lesson)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        },

        getTeachersList(query) {
            this.$store.dispatch('data/getTeachersList', { query });
        },

        teacherData(item) {
            return `${item.user.firstName} ${item.user.lastName} ${item.user.middleName} (${item.user.email}) `;
        }
    }
}
</script>
