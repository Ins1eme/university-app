import store from '@/store';

export async function isAuth(to, from, next) {
    await store.dispatch('auth/getUser');

    if (!store.state.auth.user) {
        return next('/auth/login');
    }

    next();
}

export async function isPaymentLogs(to, from, next) {
    await store.dispatch('payment/getPaymentLogs', to.params.id);

    if (!store.state.payment.paymentLogs.length) {
        return next('/payments');
    }
    next();
}

export async function isLessonMaterials(to, from, next) {
    await store.dispatch('lesson/getLessonMaterials', to.params.id);

    if (!store.state.lesson.lessonMaterials) {
        return next('/lessons');
    }
    next();
}

export async function isLessonGroups(to, from, next) {
    await store.dispatch('lesson/getLessonGroups', to.params.id);

    if (!store.state.lesson.groupLessons) {
        return next('/lessons');
    }
    next();
}

export async function isEvaluations(to, from, next) {
    await store.dispatch('evaluation/getEvaluations', {
        lessonId: to.params.lessonId,
        groupId: to.params.groupId
    });

    if (!store.state.evaluation.evaluations) {
        return next('/lessons');
    }
    next();
}

export async function isStudentGrade(to, from, next) {
    await store.dispatch('lesson/getStudentGrade', to.params.id);

    if (!store.state.lesson.studentGrade) {
        return next('/lessons');
    }

    next();
}
