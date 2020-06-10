import actions from './actions';
import mutations from './mutations';

const account = {
    namespaced: true,
    state: {
        accounts: [],
        account: {},
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default account;
