import request from '@/utils/http-common';
import cookies from 'js-cookie';
import router from '@/router';
import locale from '@/localization/uk.json';

const pages = {
    admin: '/accounts',
    teacher: '/lessons',
    student: '/dashboard'
};

export default {
    login: async({ commit }, data) => {
        await request({ method: 'post', url: 'user/session', data})
            .then(res => {
                if (res && res.data) {
                    commit('SET_USER', res.data.user);
                    cookies.set('token', res.data.token);

                    router.push(pages[res.data.user.roleName]);
                }
            }).catch(error => {
                commit('SET_NOTIFICATION', {
                    text: locale.notifications[error.response.data],
                    error: true
                }, { root: true })
            })
    },

    logout: async({ commit }) => {
        await request({ method: 'delete', url: '/user/session' })
            .then(() => {
                router.push('/auth/login');
                commit('SET_USER', {});
            })
    },

    getUser: async({ commit }) => {
        await request({ method: 'get', url: '/user/data' })
            .then(res => {
                if (res && res.data) {
                    commit('SET_USER', res.data);
                }
            })
    },

    updateCurrentUser: async({ commit }, data) => {
        await request({ method: 'put', url: '/user/data', data })
            .then(res => {
                if (res && res.data) {
                    commit('SET_USER', res.data);
                }
            })
    }
}
