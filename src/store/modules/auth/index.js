import actions from './actions';
import mutations from './mutations';

const auth = {
    namespaced: true,
    state: {
        user: null,
        newUserImage: null
    },
    actions,
    mutations
}

export default auth;
