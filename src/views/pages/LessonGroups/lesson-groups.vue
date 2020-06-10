<template src="./lesson-groups.html"> </template>
<style lang="scss" src="./lesson-groups.scss" scoped> </style>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        filters: {
            name: null,
            numberOfSemesters: null,
            groupId: null
        },
    }),
    computed: {
        ...mapState({
            groupLessons: (state) => state.lesson.groupLessons,
            groupsList: (state) => state.data.groupsList,
            user: (state) => state.auth.user,
            pagination: (state) => state.group.pagination
        }),
        headers() {
            return [
                { text: 'Назва групи', value: 'group.name' },
                { text: 'Кількість семестрів', value: 'group.numberOfSemesters' },
                { text: 'Оновлено', value: 'group.updatedAt' },
                { text: 'Створено', value: 'group.createdAt' },
                { text: 'Дії', value: 'actions' },
            ]
        }
    },
    created: function() {
        this.$store.dispatch('data/getGroupsList');
    },
    methods: {
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
        },

        setLessonGroups(lesson) {
            this.$store.dispatch('lesson/setLessonGroups', {
                groupsIds: lesson.groupsIds,
                lessonId: lesson.id
            });
        },

        toEvaluations(groupId) {
            this.$router.push(`/lessons/${this.$route.params.id}/${groupId}/evaluations`)
        }
    }
}
</script>
