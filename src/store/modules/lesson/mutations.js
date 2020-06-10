import Vue from 'vue';

export default {
    SET_LESSONS: (state, lessons) => {
        state.lessons = lessons;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_LESSON: (state, lesson) => {
        const index = state.lessons.findIndex(it => it.id == lesson.id);
        Vue.set(state.lessons, index, {
            ...state.lessons[index],
            ...lesson
        });
    },

    SET_LESSON_MATERIALS: (state, lessonMaterials) => {
        state.lessonMaterials = lessonMaterials;
    },

    ADD_LESSON_MATERIALS: (state, lessonMaterials) => {
        state.lessonMaterials.push(...lessonMaterials);
    },

    ADD_LESSON: (state, lesson) => {
        state.lessons.push(lesson);
    },

    REMOVE_LESSON: (state, lesson) => {
        const index = state.lessons.findIndex(it => it.id == lesson.id);
        state.lessons.splice(index, 1);
    },

    REMOVE_LESSON_MATERIAL: (state, lessonMaterialId) => {
        const index = state.lessonMaterials.findIndex(it => it.id == lessonMaterialId);
        state.lessonMaterials.splice(index, 1);
    },

    SET_ACTIVE_LESSON: (state, lesson) => {
        state.lesson = { ...lesson };
    },

    SET_LESSON_GROUPS: (state, groupLessons) => {
        state.groupLessons = groupLessons;
    },

    SET_STUDENT_GRADE: (state, studentGrade) => {
        state.studentGrade = studentGrade;
    },


}
