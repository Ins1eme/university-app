import actions from './actions';
import mutations from './mutations';

const learnForm = {
    namespaced: true,
    state: {
        learnForms: [],
        learnForm: {},
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default learnForm;
