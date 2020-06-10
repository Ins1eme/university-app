import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import data from './modules/data';
import auth from './modules/auth';
import faculty from './modules/faculty';
import cathedra from './modules/cathedra';
import group from './modules/group';
import learnForm from './modules/learn-form';
import notification from './modules/notification';
import account from './modules/account';
import payment from './modules/payment';
import balanceHistory from './modules/balance-history';
import lesson from './modules/lesson';
import task from './modules/task';
import evaluation from './modules/evaluation';

const store = new Vuex.Store({
    modules: {
        data,
        auth,
        faculty,
        cathedra,
        group,
        learnForm,
        notification,
        account,
        payment,
        balanceHistory,
        lesson,
        task,
        evaluation
    }
})

export default store;
