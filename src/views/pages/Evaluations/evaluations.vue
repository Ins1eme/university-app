<template src="./evaluations.html"> </template>
<style lang="scss" src="./evaluations.scss" scoped> </style>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
    }),
    computed: {
        ...mapState({
            evaluations: (state) => state.evaluation.evaluations,
            assessments: (state) => [{ value: null, text: 'Студент' }, ...state.task.tasks.map((it) => ({
                value: it.id,
                text: it.name
            }))]
        }),
        isShowJournal() {
            return this.evaluations.length && this.assessments.length >= 2
        }
    },
    created: function() {
        this.$store.dispatch('task/getTasks', this.$route.params.lessonId)
    },
    methods: {
        onSave(assessmentId, studentId, evaluation) {
            this.$store.dispatch('evaluation/setEvaluation', {
                assessmentId,
                studentId,
                evaluation
            })
        }
    }
}
</script>
