import Vue from 'vue';

export default {
    SET_TASKS: (state, tasks) => {
        state.tasks = tasks;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_TASK: (state, task) => {
        const index = state.tasks.findIndex(it => it.id == task.id);
        Vue.set(state.tasks, index, {
            ...state.tasks[index],
            ...task
        });
    },

    ADD_TASK: (state, task) => {
        state.tasks.push(task);
    },

    REMOVE_TASK: (state, task) => {
        const index = state.tasks.findIndex(it => it.id == task.id);
        state.tasks.splice(index, 1);
    },

    SET_ACTIVE_TASK: (state, task) => {
        state.task = { ...task };
    }
}
