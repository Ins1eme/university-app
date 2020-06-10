import request from '@/utils/http-common';

export default {
    getFacultiesList: async({ commit }) => {
        await request({ method: 'get', url: '/faculty/all' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_FACUTLIES_LIST', res.data);
                }
            })
    },
    
    getCathedrasList: async({ commit }) => {
        await request({ method: 'get', url: '/cathedra/all' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_CATHEDRAS_LIST', res.data);
                }
            })
    },

    getLearnFormsList: async({ commit }) => {
        await request({ method: 'get', url: '/learn-form/all' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_LEARN_FORMS_LIST', res.data);
                }
            })
    },

    getGroupsList: async({ commit }) => {
        await request({ method: 'get', url: '/group/all' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_GROUPS_LIST', res.data);
                }
            })
    },

    getStudentsList: async({ commit }, params) => {
        await request({ method: 'get', url: '/user/student/all', params })
            .then(res => {
                if (res && res.data) {
                    commit('SET_STUDENTS_LIST', res.data);
                }
            })
    },

    getTeachersList: async({ commit }, params) => {
        await request({ method: 'get', url: '/user/teacher/all', params })
            .then(res => {
                if (res && res.data) {
                    commit('SET_TEACHERS_LIST', res.data);
                }
            })
    },

    getTasksList: async({ commit }) => {
        await request({ method: 'get', url: '/lesson/all' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_TASK_LIST', res.data);
                }
            })
    },
}
