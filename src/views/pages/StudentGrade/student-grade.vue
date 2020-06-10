<template src="./student-grade.html"> </template>
<style lang="scss" src="./student-grade.scss" scoped> </style>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        headers: [{
            text: 'Назва завдання',
            value: 'name'
        }, {
            text: 'Додаткова інформація',
            value: 'description',
        }, {
            text: 'Оцінка',
            value: 'evaluation',
        }, {
            text: 'Максимальна оцінка',
            value: 'max'
        }]
    }),
    computed: {
        ...mapState({
            studentGrade: (state) => state.lesson.studentGrade
        })
    }
}
</script>
