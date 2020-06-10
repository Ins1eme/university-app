<template src="./balance-history.html"> </template>
<style lang="scss" src="./balance-history.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import locale from '@/localization/uk.json';
import debounce from 'debounce';

export default {
    data: () => ({
        locale,
        query: null,
        filters: {
            studentId: null,
        }
    }),
    computed: {
        ...mapState({
            balanceHistories: (state) => state.balanceHistory.balanceHistories,
            pagination: (state) => state.payment.pagination,
            studentsList: (state) => state.data.studentsList,
            user: (state) => state.auth.user
        }),
        headers() {
            const headerRoles = {
                admin: [
                    { text: '#', value: 'id' }, 
                    { text: 'Баланс', value: 'balance' }, 
                    { text: 'Зміна', value: 'change' },
                    { text: 'Студент', value: 'studentId' },
                    { text: 'Оновлено', value: 'updatedAt' }, 
                    { text: 'Створено', value: 'createdAt' }
                ],
                student: [
                    { text: 'Баланс', value: 'balance' }, 
                    { text: 'Зміна', value: 'change' },
                    { text: 'Оновлено', value: 'updatedAt' }, 
                    { text: 'Створено', value: 'createdAt' }
                ]
            }
            return headerRoles[this.user.roleName];
        }
    },
    created: function() {
        this.getBalanceHistories();
    },
    watch: {
        query: debounce(function(val) {
            if (val && val.length >= 3) {
                this.getStudentsList(val)
            }
        }, 500)
    },
    methods: {
        getBalanceHistories(page = 1) {
            this.$store.dispatch('balanceHistory/getBalanceHistories', { page, ...this.filters });
        },

        getStudentsList(query) {
            this.$store.dispatch('data/getStudentsList', { query })
        },

        studentData(item) {
            return `${item.user.firstName} ${item.user.lastName} ${item.user.middleName} (${item.user.email}) `;
        },

        isAllowed(roles) {
            return roles.includes(this.user.roleName)
        }
    }
}
</script>
