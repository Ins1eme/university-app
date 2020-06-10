<template src="./system-header.html"> </template>
<style lang="scss" src="./system-header.scss" scoped> </style>

<script>
import { mapState } from 'vuex';
import locale from '@/localization/uk.json'

export default {
    computed: {
        ...mapState({
            user: (state) => state.auth.user
        }),
        routeName() {
            return locale.routes[this.$route.name]
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
        }
    }
}
</script>
