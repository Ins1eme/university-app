<template src="./accounts.html"> </template>
<style lang="scss" src="./accounts.scss" scoped> </style>

<script>

import { mapState } from 'vuex';
import accountEditor from './account-editor/account-editor';
import locale from '@/localization/uk.json';

export default {
    components: {
        'v-account-editor': accountEditor
    },
    data: () => ({
        locale,
        dialog: false,
        filters: {
            firstName: null,
            lastName: null,
            middleName: null,
            email: null,
            roleName: null,
            groupId: null,
            learnFormId: null,
            cathedraId: null,
            facultyId: null
        },
        roles: [{
            text: 'Адміністратор',
            value: 'admin'
        }, {
            text: 'Викладач',
            value: 'teacher'
        }, {
            text: 'Студент',
            value: 'student'
        }]
    }),
    computed: {
        ...mapState({
            facultiesList: (state) => state.data.facultiesList,
            cathedrasList: (state) => state.data.cathedrasList,
            learnFormsList: (state) => state.data.learnFormsList,
            groupsList: (state) => state.data.groupsList,
            accounts: (state) => state.account.accounts,
            pagination: (state) => state.account.pagination
        }),
        headers() {
            return [{
                text: '#',
                value: 'id'
            }, {
                text: 'Ім\'я',
                value: 'firstName'
            }, {
                text: 'Прізвище',
                value: 'lastName'
            }, {
                text: 'По батькові',
                value: 'middleName'
            },  {
                text: 'E-mail',
                value: 'email'
            }, {
                text: 'Дата народження',
                value: 'birthday'
            }, {
                text: 'Роль',
                value: 'roleName'
            }, {
                text: 'Факультет',
                value: 'facultyId'
            }, {
                text: 'Кафедра',
                value: 'cathedraId'
            }, {
                text: 'Група',
                value: 'groupId'
            }, {
                text: 'Форма навчання',
                value: 'learnFormId'
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
        this.$store.dispatch('data/getLearnFormsList');
        this.$store.dispatch('data/getGroupsList');
        this.getAccounts();
    },
    methods: {
        getAccounts(page = 1) {
            this.$store.dispatch('account/getAccounts', { page, ...this.filters });
        },

        openEditor(account = {}) {
            this.$store.commit('account/SET_ACTIVE_ACCOUNT', account);
            this.dialog = true;
        },

        removeAccount(account) {
            this.$store.dispatch('account/removeAccount', account.id)
        },

        isAllowed(roles) {
            return roles.includes(this.filters.roleName)
        },

        onRoleNameChange() {
            this.filters = {
                ...this.filters,
                learnFormId: null,
                groupId: null,
                cathedraId: null,
                facultyId: null
            }
        }
    }
}
</script>
