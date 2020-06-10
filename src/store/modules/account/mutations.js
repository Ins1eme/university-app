import Vue from 'vue';

export default {
    SET_ACCOUNTS: (state, accounts) => {
        state.accounts = accounts;
    },

    SET_PAGINATION: (state, pagination) => {
        state.pagination = pagination;
    },

    SET_ACTIVE_ACCOUNT: (state, account) => {
        state.account = { 
            ...account,
            cathedraId: account.cathedra && account.cathedra.id,
            groupId: account.group && account.group.id,
            learnFormId: account.learnForm && account.learnForm.id
        };
    },

    ADD_ACCOUNT: (state, account) => {
        state.accounts.push(account);
    },
    
    SET_ACCOUNT: (state, account) => {
        const index = state.accounts.findIndex(it => it.id == account.id);

        Vue.set(state.accounts, index, {
            ...state.accounts[index],
            ...account
        });
    },

    REMOVE_ACCOUNT: (state, accountId) => {
        const index = state.accounts.findIndex(it => it.id == accountId);
        state.accounts.splice(index, 1);
    }
}
