import actions from './actions';
import mutations from './mutations';

const balanceHistory = {
    namespaced: true,
    state: {
        balanceHistories: [],
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default balanceHistory;
