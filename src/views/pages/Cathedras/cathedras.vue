<template src="./cathedras.html"> </template>
<style lang="scss" src="./cathedras.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import cathedraEditor from './cathedra-editor/cathedra-editor';

export default {
    components: {
        'v-cathedra-editor': cathedraEditor
    },
    data: () => ({
        dialog: false,
        filters: {
            name: null,
            facultyId: null,
        },
    }),
    computed: {
        ...mapState({
            facultiesList: (state) => state.data.facultiesList,
            cathedras: (state) => state.cathedra.cathedras,
            pagination: (state) => state.cathedra.pagination
        }),
        headers() {
            return [{
                text: '#',
                value: 'id'
            }, {
                text: 'Назва кафедри',
                value: 'name'
            }, {
                text: 'Факультет',
                value: 'facultyId'
            }, {
                text: 'Дата заснування',
                value: 'foundedDate'
            }, {
                text: 'Сайт',
                value: 'siteUrl'
            }, {
                text: 'Додаткова інформація',
                value: 'additionalInfo'
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
        this.getCathedras();
    },
    methods: {
        getCathedras(page = 1) {
            this.$store.dispatch('cathedra/getCathedras', { page, ...this.filters });
        },

        openEditor(cathedra = {}) {
            this.$store.commit('cathedra/SET_ACTIVE_CATHEDRA', cathedra);
            this.dialog = true;
        },

        removeCathedra(cathedra) {
            this.$store.dispatch('cathedra/removeCathedra', cathedra.id)
        }
    }
}
</script>
