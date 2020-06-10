export default {
    SET_FACUTLIES_LIST: (state, facultiesList) => {
        state.facultiesList = facultiesList;
    },
    
    SET_CATHEDRAS_LIST: (state, cathedrasList) => {
        state.cathedrasList = cathedrasList;
    },

    SET_LEARN_FORMS_LIST: (state, learnFormsList) => {
        state.learnFormsList = learnFormsList;
    },

    SET_GROUPS_LIST: (state, groupsList) => {
        state.groupsList = groupsList;
    },

    SET_STUDENTS_LIST: (state, studentsList) => {
        state.studentsList = studentsList;
    },

    SET_TEACHERS_LIST: (state, teachersList) => {
        state.teachersList = teachersList;
    },

    SET_TASK_LIST: (state, taskList) => {
        state.taskList = taskList;
    }
}
