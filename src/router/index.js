import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import { authLayout, systemLayout } from '@/views/layouts'
import { isAuth, isPaymentLogs, isLessonMaterials, isLessonGroups, isEvaluations, isStudentGrade } from './guard';

const routes = [
    {
        path: '/',
        component: authLayout,
        redirect: '/auth/login',
        children: [{
            path: '/auth/login',
            component: () => import('@/views/pages/Login/login'),
        }]
    },
    {
        path: '/',
        component: systemLayout,
        beforeEnter: isAuth,
        redirect: '/dashboard',
        children: [{
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/pages/Dashboard/dashboard')
        }, {
            path: '/settings',
            name: 'settings',
            component: () => import('@/views/pages/Settings/settings')
        }, {
            path: '/faculties',
            name: 'faculties',
            component: () => import('@/views/pages/Faculties/faculties')
        }, {
            path: '/cathedras',
            name: 'cathedras',
            component: () => import('@/views/pages/Cathedras/cathedras')
        }, {
            path: '/groups',
            name: 'groups',
            component: () => import('@/views/pages/Groups/groups')
        }, {
            path: '/learn-forms',
            name: 'learn-forms',
            component: () => import('@/views/pages/LearnForms/learn-forms')
        }, {
            path: '/accounts',
            name: 'accounts',
            component: () => import('@/views/pages/Accounts/accounts')
        }, {
            path: '/lessons',
            name: 'lessons',
            component: () => import('@/views/pages/Lessons/lessons')
        }, {
            path: '/lessons/lesson-groups/:id',
            beforeEnter: isLessonGroups,
            name: 'lesson-groups',
            component: () => import('@/views/pages/LessonGroups/lesson-groups')
        }, {
            path: '/lessons/:id/materials',
            beforeEnter: isLessonMaterials,
            name: 'lesson-materials',
            component: () => import('@/views/pages/Lessons/lesson-materials/lesson-materials')  
        }, {
            path: '/lessons/:id',
            beforeEnter: isStudentGrade,
            name: 'student-grade',
            component: () => import('@/views/pages/StudentGrade/student-grade')
        }, {
            path: '/lessons/:lessonId/:groupId/evaluations',
            beforeEnter: isEvaluations,
            name: 'evaluations',
            component: () => import('@/views/pages/Evaluations/evaluations')  
        }, {
            path: '/payments',
            name: 'payments',
            component: () => import('@/views/pages/Payments/payments')
        }, {
            path: '/tasks',
            name: 'tasks',
            component: () => import("@/views/pages/Tasks/tasks")
        }, {
            path: '/payments/:id',
            beforeEnter: isPaymentLogs,
            name: 'payment-logs',
            component: () => import('@/views/pages/PaymentLogs/payment-logs')
        }, {
            path: '/balance-histories',
            name: 'balance-histories',
            component: () => import('@/views/pages/BalanceHistory/balance-history')
        }]
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})