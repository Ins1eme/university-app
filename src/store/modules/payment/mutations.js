export default {
    SET_PAYMENTS: (state, payments) => {
        state.payments = payments;
    },

    SET_PAYMENT_LOGS: (state, logs) => {
        state.paymentLogs = logs
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    }
}
