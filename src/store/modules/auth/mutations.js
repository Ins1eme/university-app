export default {
    SET_USER: (state, user) => {
        state.user = user;
    },

    SET_USER_IMAGE: (state, image) => {
        state.newUserImage = image;
    },

    SET_USER_BALANCE: (state, balance) => {
        state.user.student.balance = state.user.student.balance - balance;
    }
};
