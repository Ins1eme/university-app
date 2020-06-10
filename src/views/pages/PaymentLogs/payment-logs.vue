<template src="./payment-logs.html"> </template>
<style lang="scss" src="./payment-logs.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import locale from '@/localization/uk.json';

export default {
    data: () => ({
        locale,
        filters: {
            query: null,
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
            text: 'Тип платежу',
            value: 'type'
        }, {
            text: 'Відповідь',
            value: 'response'
        }, {
            text: 'Оновлено',
            value: 'updatedAt'
        }, {
            text: 'Створено',
            value: 'createdAt'
        }]
    }),
    computed: {
        ...mapState({
            paymentLogs: (state) => state.payment.paymentLogs,
        })
    }
}
</script>
