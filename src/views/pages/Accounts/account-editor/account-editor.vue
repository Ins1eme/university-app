<template src="./account-editor.html"> </template>
<style lang="scss" src="./account-editor.scss" scoped> </style>

<script>

import { mapState } from 'vuex';
import { ValidationObserver } from "vee-validate";
import { VTextFieldWithValidation, 
        VDatePickerWithValidation, 
        VSelectWithValidation,
        VAutocompleteWithValidation
} from '@/views/components';

export default {
    components: {
        VTextFieldWithValidation,
        ValidationObserver,
        VSelectWithValidation,
        VDatePickerWithValidation,
        VAutocompleteWithValidation
    },
    props: {
        value: {
            type: Boolean
        }
    },
    data: () => ({
        roles: [{
            text: 'Адміністратор',
            value: 'admin'
        }, {
            text: 'Викладач',
            value: 'teacher'
        }, {
            text: 'Студент',
            value: 'student'
        }]
    }),
    computed: {
        ...mapState({
            cathedrasList: (state) => state.data.cathedrasList,
            learnFormsList: (state) => state.data.learnFormsList,
            groupsList: (state) => state.data.groupsList,
            account: (state) => state.account.account
        }),
        editorDialog: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        },
        buttonText() {
            return this.account.id ? 'Змінити' : 'Створити'
        },
        isTeacher() {
            return this.account.roleName === 'teacher';
        },
        isStudent() {
            return this.account.roleName === 'student';
        }
    },
    methods: {
        async save() {
            const isValid = await this.$refs.observer.validate();

            if (!isValid) {
                return;
            }

            this.editorDialog = false;

            if (this.account.id) {
                this.$store.dispatch('account/editAccount', this.account)
            } else {
                this.$store.dispatch('account/createAccount', this.account)
            }
        },

        closeDialog() {
            this.editorDialog = false;
            this.$refs.observer.reset();
        }
    }
}
</script>
