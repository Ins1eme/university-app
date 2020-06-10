<template src="./settings.html"> </template>
<style lang="scss" src="./settings.scss" scoped> </style>

<script>

import profile from './profile/profile';
import password from './password/password';

export default {
    components: {
        'v-profile': profile,
        'v-password': password
    }
}
</script>
