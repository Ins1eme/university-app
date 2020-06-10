<template src="./payments.html"> </template>
<style lang="scss" src="./payments.scss" scoped> </style>

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
            status: null,
            type: null
        },
        headers: [{
            text: '#',
            value: 'id'
        }, {
            text: 'Номер транзацкії',
            value: 'orderId'
        }, {
            text: 'Студент',
            value: 'studentId'
        }, {
            text: 'Сума',
            value: 'amount'
        }, {
            text: 'Тип оплати',
            value: 'type'
        }, {
            text: 'Статус',
            value: 'status',
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
            payments: (state) => state.payment.payments,
            pagination: (state) => state.payment.pagination,
            studentsList: (state) => state.data.studentsList
        }),
        paymentTypes() {
            return ['rechargeBalance', 'tuitionFee'].map(it => ({
                text: locale.paymentTypes[it],
                value: it
            }))
        },
        statuses() {
            return ['new', 'success', 'error', 'sandbox'].map(it => ({
                text: locale.statuses[it],
                value: it
            }))
        }
    },
    created: function() {
        this.getPayments();
    },
    watch: {
        query: debounce(function(val) {
            if (val && val.length >= 3) {
                this.getStudentsList(val)
            }
        }, 500)
    },
    methods: {
        getPayments(page = 1) {
            this.$store.dispatch('payment/getPayments', { page, ...this.filters });
        },

        getStudentsList(query) {
            this.$store.dispatch('data/getStudentsList', { query })
        },

        studentData(item) {
            return `${item.user.firstName} ${item.user.lastName} ${item.user.middleName} (${item.user.email}) `;
        }
    }
}
</script>
