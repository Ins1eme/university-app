<template src="./tasks.html"> </template>
<style lang="scss" src="./tasks.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import taskEditor from './task-editor/task-editor';

export default {
    components: {
        'v-task-editor': taskEditor
    },
    data: () => ({
        dialog: false,
        lessonId: null,
        lessons: [{id: 2, name: 'Урок 2'}],
        headers: [{
            text: '#',
            value: 'id'
        }, {
            text: 'Назва завдання',
            value: 'name'
        }, {
            text: 'Максимальна оцінка',
            value: 'max'
        }, {
            text: 'Додаткова інформація',
            value: 'description',
        }, {
            text: 'Порядок',
            value: 'order',
        }, {
            text: 'Оновлено',
            value: 'updatedAt'
        }, {
            text: 'Створено',
            value: 'createdAt'
        }, {
            text: 'Дії',
            value: 'actions'
        }]
    }),
    computed: {
        ...mapState({
            tasks: (state) => state.task.tasks,
            taskList: (state) => state.data.taskList,
            pagination: (state) => state.task.pagination
        })
    },
    created: function() {
        this.$store.dispatch('data/getTasksList')
    },
    methods: {
        removeTask(task) {
            this.$store.dispatch('task/removeTask', task.id);
        },

        openEditor(task = {}) {
            this.$store.commit('task/SET_ACTIVE_TASK', task);
            this.dialog = true;
        },

        getTasks() {
            this.$store.dispatch('task/getTasks', this.lessonId);
        }
    }
}
</script>
