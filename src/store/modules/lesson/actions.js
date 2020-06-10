import request from '@/utils/http-common'; 
import locale from '@/localization/uk.json';

export default {
    getLessons: async({ commit }, params) => {
        await request({ method: 'get', url: '/lesson/list', params })
            .then(res => {
                if (res && res.data && res.data.lessons) {
                    const lessons = res.data.lessons.map(it => ({
                        ...it,
                        groupsIds: it.groupLesson.map(it => it.group)
                    }))

                    commit('SET_LESSONS', lessons);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    },

    removeLesson: async({ commit }, lessonId) => {
        await request({ method: 'delete', url: `/lesson/${lessonId}` })
            .then(res => {
                if (res) {
                    commit('REMOVE_LESSON', lessonId);
                    commit('SET_NOTIFICATION', {
                        text: 'Урок успішно видалений',
                    }, { root: true })
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    editLesson: async({ commit }, lesson) => {
        await request({ method: 'put', url: `/lesson/${lesson.id}`, data: lesson })
            .then(res => {
                if (res && res.data) {
                    commit('SET_LESSON', res.data);
                    commit('SET_NOTIFICATION', {
                        text: 'Урок успішно змінений'
                    }, { root: true })
                }
            })
    },

    createLesson: async({ commit }, lesson) => {
        await request({ method: 'post', url: '/lesson', data: lesson })
            .then(res => {
                if (res && res.data) {
                    const lesson = {
                        ...res.data,
                        groupsIds: res.data.groupLesson.map(it => it.group)
                    }

                    commit('ADD_LESSON', lesson);
                    commit('SET_NOTIFICATION', {
                        text: 'Урок успішно створений'
                    }, { root: true })
                }
            })
    },

    getLessonMaterials: async({ commit }, lessonId) => {
        await request({ method: 'get', url: `/lesson/${lessonId}/data` })
            .then(res => {
                if (res && res.data && res.data.lessonMaterials) {
                    commit('SET_LESSON_MATERIALS', res.data.lessonMaterials)
                }
            }).catch(() => {
                commit('SET_NOTIFICATION', {
                    text: 'Урок не знайдено',
                    error: true
                }, { root: true })
            })
    },

    getLessonGroups: async({ commit }, lessonId) => {
        await request({ method: 'get', url: `/lesson/${lessonId}/data` })
            .then(res => {
                if (res && res.data && res.data.groupLesson) {
                    commit('SET_LESSON_GROUPS', res.data.groupLesson)
                }
            }).catch(() => {
                commit('SET_NOTIFICATION', {
                    text: 'Урок не знайдено',
                    error: true
                }, { root: true })
            })
    },

    addLessonMaterials: async({ commit }, data) => {
        await request({ method: 'post', url: `/lesson/${data.lessonId}/materials`, data: data.formData })
            .then(res => {
                if (res && res.data) {
                    const files = res.data.files.map(it => ({ file: it}));
                    commit('ADD_LESSON_MATERIALS', files)
                }
            })
    },

    removeLessonMaterial: async({ commit }, data) => {
        await request({ method: 'delete', url: `/lesson/${data.lessonId}/${data.lessonMaterialId}` })
            .then(() => {
                commit('REMOVE_LESSON_MATERIAL', data.lessonMaterialId)
                commit('SET_NOTIFICATION', {
                    text: 'Файл успішно видалений',
                }, { root: true })
            })
    },

    setLessonGroups: async({ commit }, data) => {
        await request({ method: 'post', url: `/lesson/${data.lessonId}/set-groups`, data })
            .then((res) => {
                if (res && res.data && res.data.groupLesson) {
                    commit('SET_LESSON_GROUPS', res.data.groupLesson);
                }
            })
    },

    getStudentGrade: async({ commit }, lessonId) => {
        await request({ method: 'get', url: `/lesson/${lessonId}/evaluations` })
            .then((res) => {
                if (res && res.data) {
                    commit('SET_STUDENT_GRADE', res.data);
                }
            })
    }
}