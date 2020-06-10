<template src="./profile.html"> </template>
<style lang="scss" src="./profile.scss" scoped> </style>

<script>
import { mapState } from 'vuex'
import { ValidationObserver } from "vee-validate";
import VTextFieldWithValidation from '@/views/components/inputs/VTextFieldWithValidation';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver
    },
    data: () => ({
        formData: null,
    }),
    computed: {
        ...mapState({
            user: (state) => state.auth.user,
            newUserImage: (state) => state.auth.newUserImage
        }),
        userImage: {
            get() {
                if (this.newUserImage) {
                    return this.newUserImage;
                } else {
                    return this.user.photo && `${process.env.VUE_APP_BASE}${this.user.photo.path}` || require('@/assets/images/user.png');
                }
            },
            set(value) {
                this.$store.commit('auth/SET_USER_IMAGE', value)
            }
        }
    },
    methods: {
        onFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                this.formData = new FormData();
                this.formData.append('image', file);
                this.userImage = URL.createObjectURL(file);
            }
        },

        updateProfile() {
            if (this.newUserImage) {
                this.$store.dispatch('auth/updateCurrentUser', this.formData);
            }
        }
    }
}
</script>
