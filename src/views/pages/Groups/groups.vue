<template src="./groups.html"> </template>
<style lang="scss" src="./groups.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import cathedraEditor from './group-editor/group-editor';

export default {
    components: {
        'v-cathedra-editor': cathedraEditor
    },
    data: () => ({
        dialog: false,
        filters: {
            name: null,
            facultyId: null,
            numberOfSemesters: null,
            cathedraId: null
        },
    }),
    computed: {
        ...mapState({
            facultiesList: (state) => state.data.facultiesList,
            cathedrasList: (state) => state.data.cathedrasList,
            groups: (state) => state.group.groups,
            pagination: (state) => state.group.pagination
        }),
        headers() {
            return [{
                text: '#',
                value: 'id'
            }, {
                text: 'Назва групи',
                value: 'name'
            }, {
                text: 'Кількість студентів',
                value: 'students'
            }, {
                text: 'Кафедра',
                value: 'cathedraId'
            },  {
                text: 'Факультет',
                value: 'facultyId'
            }, {
                text: 'Кількість семестрів',
                value: 'numberOfSemesters'
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
        }
    },
    created: function() {
        this.$store.dispatch('data/getFacultiesList');
        this.$store.dispatch('data/getCathedrasList');
        this.getGroups();
    },
    methods: {
        getGroups(page = 1) {
            this.$store.dispatch('group/getGroups', { page, ...this.filters });
        },

        openEditor(group = {}) {
            this.$store.commit('group/SET_ACTIVE_GROUP', group);
            this.dialog = true;
        },

        removeGroup(group) {
            this.$store.dispatch('group/removeGroup', group.id)
        }
    }
}
</script>
