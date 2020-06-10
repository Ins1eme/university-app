import request from '@/utils/http-common'; 

export default {
    getBalanceHistories: async({ commit }, params) => {
        await request({ method: 'get', url: '/balance-history', params })
            .then(res => {
                if (res && res.data && res.data.changes) {
                    commit('SET_BALANCE_HISTORIES', res.data.changes);
                    commit('SET_PAGINATION', {
                        page: res.data.page,
                        totalPages: res.data.totalPages
                    });
                }
            })
    }
}
