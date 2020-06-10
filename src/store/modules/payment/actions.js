import request from '@/utils/http-common'; 
import locale from '@/localization/uk.json';

export default {
    getPayments: async({ commit }, params) => {
        await request({ method: 'get', url: '/payment/history', params })
            .then(res => {
                if (res && res.data && res.data.payments) {
                    commit('SET_PAYMENTS', res.data.payments);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    getPaymentLogs: async({ commit }, paymentId) => {
        await request({ method: 'get', url: `/payment/${paymentId}/logs` })
            .then(res => {
                if (res && res.data && res.data.logs) {
                    commit('SET_PAYMENT_LOGS', res.data.logs);
                }
            })
    },

    refillBalance: async({ commit }, data) => {
        await request({ method: 'post', url: `/payment/recharge-balance`, data })
            .then(res => {
                window.open(res.data.liqpay.url);
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    tuition: async({ commit }, data) => {
        await request({ method: 'post', url: `/payment/pay-tuition`, data })
            .then(res => {
                if (res) {
                    commit('auth/SET_USER_BALANCE', data.amount, { root: true });
                    commit('SET_NOTIFICATION', {
                        text: 'Оплата успішно проведена',
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    }
}