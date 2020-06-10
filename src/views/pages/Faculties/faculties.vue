<template src="./faculties.html"> </template>
<style lang="scss" src="./faculties.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import facultyEditor from './faculty-editor/faculty-editor';

export default {
    components: {
        'v-faculty-editor': facultyEditor
    },
    data: () => ({
        dialog: false,
        frameDialog: false,
        activeFaculty: null,
        filters: {
            name: null
        },
        headers: [{
            text: '#',
            value: 'id'
        }, {
            text: 'Назва',
            value: 'name'
        }, {
            text: 'Кількість кафедр',
            value: 'cathedras'
        }, {
            text: 'Дата заснування',
            value: 'foundedDate',
        }, {
            text: 'Сайт',
            value: 'siteUrl'
        }, {
            text: 'Додаткова інформація',
            value: 'additionalInfo',
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
            faculties: (state) => state.faculty.faculties,
            pagination: (state) => state.faculty.pagination
        })
    },
    created: function() {
        this.getFaculties();
    },
    methods: {
        getFaculties(page = 1) {
            this.$store.dispatch('faculty/getFaculties', { page, ...this.filters });
        },

        removeFaculty(faculty) {
            this.$store.dispatch('faculty/removeFaculty', faculty.id);
        },

        openEditor(faculty = {}) {
            this.$store.commit('faculty/SET_ACTIVE_FACULTY', faculty);
            this.dialog = true;
        },

        openFrame(faculty) {
            this.activeFaculty = faculty;
            this.frameDialog = true;
        }
    }
}
</script>
