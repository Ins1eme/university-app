import Vue from 'vue';

export default {
    SET_FACULTIES: (state, faculties) => {
        state.faculties = faculties;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_FACULTY: (state, faculty) => {
        const index = state.faculties.findIndex(it => it.id == faculty.id);
        Vue.set(state.faculties, index, {
            ...state.faculties[index],
            ...faculty
        });
    },

    ADD_FACULTY: (state, faculty) => {
        state.faculties.push(faculty);
    },

    REMOVE_FACULTY: (state, faculty) => {
        const index = state.faculties.findIndex(it => it.id == faculty.id);
        state.faculties.splice(index, 1);
    },

    SET_ACTIVE_FACULTY: (state, faculty) => {
        state.faculty = { ...faculty };
    }
}
