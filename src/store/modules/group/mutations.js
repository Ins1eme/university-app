import Vue from 'vue';

export default {
    SET_GROUPS: (state, groups) => {
        state.groups = groups;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_ACTIVE_GROUP: (state, group) => {
        state.group = { ...group };
    },

    ADD_GROUP: (state, group) => {
        state.groups.push(group);
    },
    
    SET_GROUP: (state, group) => {
        const index = state.groups.findIndex(it => it.id == group.id);

        Vue.set(state.groups, index, {
            ...state.groups[index],
            ...group
        });
    },

    REMOVE_GROUP: (state, groupId) => {
        const index = state.groups.findIndex(it => it.id == groupId);
        state.groups.splice(index, 1);
    }
}
