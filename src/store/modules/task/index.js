import actions from './actions';
import mutations from './mutations';

const task = {
    namespaced: true,
    state: {
        tasks: [],
        pagination: {
            page: null,
            totalPages: null
        },
        task: {}
    },
    actions,
    mutations
}

export default task;
