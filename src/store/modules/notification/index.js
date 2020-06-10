import mutations from './mutations';

const notification = {
    state: {
        snackbar: {
            isShow: false,
            timeout: 2000,
            text: null,
            error: false
        }
    },
    mutations
}

export default notification;
