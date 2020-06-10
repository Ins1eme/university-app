import actions from './actions';
import mutations from './mutations';

const lesson = {
    namespaced: true,
    state: {
        lessons: [],
        groupLessons: [],
        lessonMaterials: [],
        lesson: {},
        studentGrade: [],
        pagination: {
            page: null,
            totalPages: null
        },
    },
    actions,
    mutations
}

export default lesson;
