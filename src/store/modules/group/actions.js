import request from '@/utils/http-common';
import locale from '@/localization/uk.json';

export default {
    getGroups: async({ commit }, params) => {
        await request({ method: 'get', url: 'group/list', params })
            .then(res => {
                if (res && res.data && res.data.groups) {
                    commit('SET_GROUPS', res.data.groups);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    editGroup: async({ commit }, data) => {
        await request({ method: 'put', url: `group/${data.id}`, data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_GROUP', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Група успішно змінена'
                    }, { root: true })
                }
            })
    },

    removeGroup: async({ commit }, groupId) => {
        await request({ method: 'delete', url: `group/${groupId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_GROUP', groupId);
                    commit('SET_NOTIFICATION', {
                        text: 'Група успішно видалена'
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    createGroup: async({ commit }, data) => {
        await request({ method: 'post', url: 'group', data })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_GROUP', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Група успішно створена'
                    }, { root: true })
                }
            })
    }
}
