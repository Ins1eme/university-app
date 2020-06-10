import actions from './actions';
import mutations from './mutations';

const cathedra = {
    namespaced: true,
    state: {
        cathedras: [],
        cathedra: {},
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default cathedra;
