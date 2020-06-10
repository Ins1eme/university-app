<template src="./lessons.html"> </template>
<style lang="scss" src="./lessons.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import lessonEditor from './lesson-editor/lesson-editor';

export default {
    components: {
        'v-lesson-editor': lessonEditor
    },
    data: () => ({
        dialog: false,
        filters: {
            name: null,
            numberOfSemesters: null,
            groupId: null
        },
    }),
    computed: {
        ...mapState({
            lessons: (state) => state.lesson.lessons,
            groupsList: (state) => state.data.groupsList,
            user: (state) => state.auth.user,
            pagination: (state) => state.group.pagination
        }),
        headers() {
            const headerRoles = {
                admin: [
                    { text: '#', value: 'id' },
                    { text: 'Назва уроку', value: 'name' },
                    { text: 'Викладач', value: 'teacherId' },
                    { text: 'Група', value: 'groupsIds' },
                    { text: 'Оновлено', value: 'updatedAt' },
                    { text: 'Створено', value: 'createdAt' },
                    { text: 'Дії', value: 'actions' },
                ],
                teacher: [
                    { text: '#', value: 'id' },
                    { text: 'Назва уроку', value: 'name' },
                    { text: 'Дії', value: 'actions' }
                ],
                student: [
                    { text: 'Назва уроку', value: 'name' },
                    { text: 'Викладач', value: 'teacherId' },
                    { text: 'Дії', value: 'actions' }
                ]
            }
            return headerRoles[this.user.roleName];
        }
    },
    created: function() {
        this.$store.dispatch('data/getGroupsList');
        this.getLessons();
    },
    methods: {
        getLessons(page = 1) {
            this.$store.dispatch('lesson/getLessons', { page, ...this.filters });
        },

        openEditor(lesson = {}) {
            if (lesson.teacher) {
                this.$store.commit('data/SET_TEACHERS_LIST', [lesson.teacher]);
            }
            this.$store.commit('lesson/SET_ACTIVE_LESSON', lesson);
            this.dialog = true;
        },

        removeLesson(lesson) {
            this.$store.dispatch('lesson/removeLesson', lesson.id)
        },

        isAllowed(rules) {
            return rules.includes(this.user.roleName)
        }
    }
}
</script>
