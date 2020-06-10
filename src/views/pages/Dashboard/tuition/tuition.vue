<template src="./tuition.html"> </template>
<style lang="scss" src="./tuition.scss" scoped> </style>

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
        isShowTuition() {
            return this.user.student && this.user.student.learnForm && this.user.student.learnForm.needPay
        }
    },
    methods: {
        async tuition() {
            const isValid = await this.$refs.observer.validate();

            if (!isValid) {
                return;
            }
    
            await this.$store.dispatch('payment/tuition', { amount: this.amount });
            
            this.resetData();
        },

        resetData() {
            this.amount = null;
            this.$refs.observer.reset();
        }
    }
}
</script>
