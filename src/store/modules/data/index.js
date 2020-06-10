import actions from './actions';
import mutations from './mutations';

const data = {
    namespaced: true,
    state: {
        facultiesList: [],
        cathedrasList: [],
        learnFormsList: [],
        groupsList: [],
        studentsList: [],
        teachersList: [],
        tasksList: []
    },
    actions,
    mutations
}

export default data;
