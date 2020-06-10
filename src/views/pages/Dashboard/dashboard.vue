<template src="./dashboard.html"> </template>
<style lang="scss" src="./dashboard.scss" scoped> </style>

<script>

import  refillBalance from './refill-balance/refill-balance';
import tuition from './tuition/tuition';

export default {
    components: {
        'v-refill-balance': refillBalance,
        'v-tuition': tuition
    }
}
</script>
