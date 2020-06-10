import request from '@/utils/http-common'; 
import locale from '@/localization/uk.json';

export default {
    getFaculties: async({ commit }, params) => {
        await request({ method: 'get', url: '/faculty/list', params })
            .then(res => {
                if (res && res.data && res.data.faculties) {
                    commit('SET_FACULTIES', res.data.faculties);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    removeFaculty: async({ commit }, facultyId) => {
        await request({ method: 'delete', url: `/faculty/${facultyId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_FACULTY', facultyId);
                    commit('SET_NOTIFICATION', {
                        text: 'Факультет успішно видалений',
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    editFaculty: async({ commit }, faculty) => {
        await request({ method: 'put', url: `/faculty/${faculty.id}`, data: faculty })
            .then(res => {
                if (res && res.data) {
                    commit('SET_FACULTY', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Факультет успішно змінений'
                    }, { root: true })
                }
            })
    },

    createFaculty: async({ commit }, faculty) => {
        await request({ method: 'post', url: '/faculty', data: faculty })
            .then(res => {
                if (res && res.data) {
                    commit('ADD_FACULTY', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Факультет успішно створений'
                    }, { root: true })
                }
            })
    }
}