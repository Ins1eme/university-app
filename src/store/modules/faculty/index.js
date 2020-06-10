import actions from './actions';
import mutations from './mutations';

const faculty = {
    namespaced: true,
    state: {
        faculties: [],
        pagination: {
            page: null,
            totalPages: null
        },
        faculty: {}
    },
    actions,
    mutations
}

export default faculty;
