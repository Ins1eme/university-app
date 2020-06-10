import request from '@/utils/http-common';
import locale from '@/localization/uk.json';

export default {
    getAccounts: async({ commit }, params) => {
        await request({ method: 'get', url: '/user/list', params })
            .then(res => {
                if (res && res.data && res.data.users) {
                    commit('SET_ACCOUNTS', res.data.users);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    editAccount: async({ commit }, data) => {
        await request({ method: 'put', url: `user/${data.id}/data`, data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_ACCOUNT', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Користувач успішно змінений'
                    }, { root: true })
                }
            })
    },

    removeAccount: async({ commit }, accountId) => {
        await request({ method: 'delete', url: `user/${accountId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_ACCOUNT', accountId);
                    commit('SET_NOTIFICATION', {
                        text: 'Користувач успішно видалений'
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    createAccount: async({ commit }, data) => {
        await request({ method: 'post', url: 'user', data })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_ACCOUNT', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Користувач успішно створений'
                    }, { root: true })
                }
            })
    }
}
