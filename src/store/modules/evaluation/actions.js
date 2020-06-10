import request from '@/utils/http-common';
import locale from '@/localization/uk.json';

export default {
    getEvaluations: async({ commit }, params) => {
        await request({ method: 'get', url: `lesson/${params.lessonId}/${params.groupId}/evaluations` })
            .then(res => {
                if (res && res.data) {
                    commit('SET_EVALUATIONS', res.data);
                }
            })
    },

    setEvaluation: async({ commit }, data) => {
        await request({ method: 'post', url: `/assessment/${data.assessmentId}/${data.studentId}/set-evaluation`, data })
            .then(() => {
                commit('SET_NOTIFICATION', {
                    text: 'Оцінка успішно виставлена'
                }, { root: true })
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    }
}
