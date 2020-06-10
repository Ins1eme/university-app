import Vue from 'vue';

export default {
    SET_LEARN_FORMS: (state, learnForms) => {
        state.learnForms = learnForms;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_ACTIVE_LEARN_FORM: (state, learnForm) => {
        state.learnForm = { ...learnForm };
    },

    ADD_LEARN_FORM: (state, learnForm) => {
        state.learnForms.push(learnForm);
    },
    
    SET_LEARN_FORM: (state, learnForm) => {
        const index = state.learnForms.findIndex(it => it.id == learnForm.id);

        Vue.set(state.learnForms, index, {
            ...state.learnForms[index],
            ...learnForm
        });
    },

    REMOVE_LEARN_FORM: (state, learnFormId) => {
        const index = state.learnForms.findIndex(it => it.id == learnFormId);
        state.learnForms.splice(index, 1);
    }
}
