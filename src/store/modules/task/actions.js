import request from '@/utils/http-common'; 
import locale from '@/localization/uk.json';

export default {
    getTasks: async({ commit }, lessonId) => {
        await request({ method: 'get', url: `/assessment/${lessonId}/list` })
            .then(res => {
                if (res && res.data && res.data.assessments) {
                    commit('SET_TASKS', res.data.assessments);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    removeTask: async({ commit }, assessmentId) => {
        await request({ method: 'delete', url: `/assessment/${assessmentId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_TASK', assessmentId);
                    commit('SET_NOTIFICATION', {
                        text: 'Завдання успішно видалено',
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    editTask: async({ commit }, data) => {
        await request({ method: 'put', url: `/assessment/${data.id}`, data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_TASK', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Факультет успішно змінений'
                    }, { root: true })
                }
            })
    },

    createTask: async({ commit }, data) => {
        await request({ method: 'post', url: `/assessment/${data.lessonId}`, data: data.task })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_TASK', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Факультет успішно створений'
                    }, { root: true })
                }
            })
    }
}
