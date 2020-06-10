<template src="./password.html"> </template>
<style lang="scss" src="./password.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation } from '@/views/components';


export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver
    },
    data: () => ({
        password: null,
        newPassword: null,
        confirmPassword: null,
        formData: null
    }),
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.formData = new FormData();
            this.formData.append('password', this.newPassword);
            await this.$store.dispatch('auth/updateCurrentUser', this.formData);
            this.resetData();
        },

        resetData() {
            this.newPassword = this.password = this.confirmPassword = null;
            this.$nextTick(() => {
                this.$refs.observer.reset();
            });
        }
    }
}
</script>
