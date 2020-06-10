import actions from './actions';
import mutations from './mutations';

const group = {
    namespaced: true,
    state: {
        groups: [],
        group: {},
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default group;
