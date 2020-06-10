import actions from './actions';
import mutations from './mutations';

const payment = {
    namespaced: true,
    state: {
        payments: [],
        paymentLogs: [],
        pagination: {
            page: null,
            totalPages: null
        }
    },
    actions,
    mutations
}

export default payment;
