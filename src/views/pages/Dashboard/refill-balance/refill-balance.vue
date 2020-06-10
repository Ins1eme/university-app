<template src="./refill-balance.html"> </template>
<style lang="scss" src="./refill-balance.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation } from '@/views/components';
import { mapState } from 'vuex';

export default {
    components: {
        ValidationObserver,
        VTextFieldWithValidation,
    },
    data: () => ({
        amount: null
    }),
    computed: {
        ...mapState({
            user: (state) => state.auth.user
        }),
    },
    methods: {
        async refillBalance() {
            const isValid = await this.$refs.observer.validate();

            if (!isValid) {
                return;
            }
    
            await this.$store.dispatch('payment/refillBalance', { amount: this.amount });
            
            this.resetData();
        },

        isAllowed(roles) {
            return roles.includes(this.user.roleName);
        },

        resetData() {
            this.amount = null;
            this.$refs.observer.reset();
        }
    }
}
</script>
