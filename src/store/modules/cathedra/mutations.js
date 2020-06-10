import Vue from 'vue';

export default {
    SET_CATHEDRAS: (state, cathedras) => {
        state.cathedras = cathedras;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_ACTIVE_CATHEDRA: (state, cathedra) => {
        state.cathedra = { ...cathedra };
    },

    ADD_CATHEDRA: (state, cathedra) => {
        state.cathedras.push(cathedra);
    },
    
    SET_CATHEDRA: (state, cathedra) => {
        const index = state.cathedras.findIndex(it => it.id == cathedra.id);

        Vue.set(state.cathedras, index, {
            ...state.cathedras[index],
            ...cathedra
        });
    },

    REMOVE_CATHEDRA: (state, cathedraId) => {
        const index = state.cathedras.findIndex(it => it.id == cathedraId);
        state.cathedras.splice(index, 1);
    }
}
