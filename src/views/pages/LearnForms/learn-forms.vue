<template src="./learn-forms.html"> </template>
<style lang="scss" src="./learn-forms.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import learnFormEditor from './learn-form-editor/learn-form-editor';
import locale from '@/localization/uk.json'

export default {
    components: {
        'v-learn-form-editor': learnFormEditor
    },
    data: () => ({
        locale,
        dialog: false,
        filters: {
            name: null
        },
    }),
    computed: {
        ...mapState({
            learnForms: (state) => state.learnForm.learnForms,
            pagination: (state) => state.group.pagination
        }),
        headers() {
            return [{
                text: '#',
                value: 'id'
            }, {
                text: 'Назва форми навчання',
                value: 'name'
            }, {
                text: 'Оплата',
                value: 'needPay'
            }, {
                text: 'Ціна',
                value: 'price'
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
        this.getLearnForms();
    },
    methods: {
        getLearnForms(page = 1) {
            this.$store.dispatch('learnForm/getLearnForms', { page, ...this.filters });
        },

        openEditor(learnForm = {}) {
            this.$store.commit('learnForm/SET_ACTIVE_LEARN_FORM', learnForm);
            this.dialog = true;
        },

        removeLearnForm(learnForm) {
            this.$store.dispatch('learnForm/removeLearnForm', learnForm.id)
        }
    }
}
</script>
