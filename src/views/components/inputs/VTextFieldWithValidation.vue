<template>
    <ValidationProvider :vid="vid" mode="eager" :name="$attrs.label" :rules="rules">
        <v-text-field
            slot-scope="{ errors }"
            v-model="innerValue"
            :error-messages="errors"
            validate-on-blur
            v-bind="$attrs"
            v-on="$listeners"
        ></v-text-field>
    </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
    components: {
        ValidationProvider
    },
    props: {
        rules: {
            type: [Object, String],
            default: ''
        },
        value: {
            type: null
        },
        vid: {
            type: String
        },
    },
    data: () => ({
        innerValue: ''
    }),
    watch: {
        innerValue (newVal) {
            this.$emit('input', newVal);
        },

        value (newVal) {
            this.innerValue = newVal;
        }
    },
    created () {
        if (this.value) {
            this.innerValue = this.value;
        }
    }
};
</script>
