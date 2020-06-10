import request from '@/utils/http-common';
import locale from '@/localization/uk.json';

export default {
    getLearnForms: async({ commit }, params) => {
        await request({ method: 'get', url: 'learn-form/list', params })
            .then(res => {
                if (res && res.data && res.data.learnForms) {
                    commit('SET_LEARN_FORMS', res.data.learnForms);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    editLearnForm: async({ commit }, data) => {
        await request({ method: 'put', url: `learn-form/${data.id}`, data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_LEARN_FORM', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Форма навчання успішно змінена'
                    }, { root: true })
                }
            })
    },

    removeLearnForm: async({ commit }, learnFormId) => {
        await request({ method: 'delete', url: `learn-form/${learnFormId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_LEARN_FORM', learnFormId);
                    commit('SET_NOTIFICATION', {
                        text: 'Форма навчання успішно видалена'
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    createLearnForm: async({ commit }, data) => {
        await request({ method: 'post', url: '/learn-form', data })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_LEARN_FORM', res.data);
                    commit('SET_NOTIFICATION', {
                        isShow: true,
                        text: 'Форма навчання успішно створена'
                    }, { root: true })
                }
            })
    }
}
