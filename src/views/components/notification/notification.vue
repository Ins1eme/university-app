<template>
    <v-snackbar
        v-model="snackbar.isShow"
        :color="color"
        :timeout="snackbar.timeout"
    >
        {{ snackbar.text }}
        <v-btn
            text
            @click="setSnackbar()"
        > Close
        </v-btn>
    </v-snackbar>
</template>
<style>

</style>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            snackbar: (state) => state.notification.snackbar
        }),
        color() {
            return this.snackbar.error ? 'error' : null
        }
    },
    methods: {
        setSnackbar() {
            this.$store.commit('SET_NOTIFICATION', {
                isShow: false
            })
        }
    }
}
</script>
