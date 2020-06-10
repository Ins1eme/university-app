import actions from './actions';
import mutations from './mutations';

const evaluation = {
    namespaced: true,
    state: {
        evaluations: [],
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default evaluation;
