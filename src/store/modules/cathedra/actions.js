import request from '@/utils/http-common';
import locale from '@/localization/uk.json';

export default {
    getCathedras: async({ commit }, params) => {
        await request({ method: 'get', url: '/cathedra/list', params })
            .then(res => {
                if (res && res.data && res.data.cathedras) {
                    commit('SET_CATHEDRAS', res.data.cathedras);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    editCathedra: async({ commit }, data) => {
        await request({ method: 'put', url: `cathedra/${data.id}`, data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_CATHEDRA', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Кафедра успішно змінена'
                    }, { root: true })
                }
            })
    },

    removeCathedra: async({ commit }, cathedraId) => {
        await request({ method: 'delete', url: `cathedra/${cathedraId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_CATHEDRA', cathedraId);
                    commit('SET_NOTIFICATION', {
                        text: 'Кафедра успішно видалена'
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    createCathedra: async({ commit }, data) => {
        await request({ method: 'post', url: 'cathedra', data })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_CATHEDRA', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Кафедра успішно створена'
                    }, { root: true })
                }
            })
    }
}
