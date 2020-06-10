export default {
    SET_NOTIFICATION: (state, snackbar) => {
        state.snackbar = {  isShow: true, ...snackbar};
    }
}
