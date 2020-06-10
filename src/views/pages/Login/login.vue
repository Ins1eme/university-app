<template src="./login.html"> </template>
<style lang="scss" src="./login.scss" scoped> </style>

<script>

import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation } from '@/views/components';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
    },
    data: () => ({
        auth: {
            loginName: null,
            email: null,
            password: null
        }
    }),
    methods: {
        async submit () {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }

            this.$store.dispatch('auth/login', this.auth);
        }
    }
};
</script>
