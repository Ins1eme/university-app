<template>
    <ValidationProvider 
        mode="eager" 
        :name="$attrs.label"
        :rules="rules" 
        :vid="vid"
        v-slot="{ errors }" 
        slim 
    > 
        <v-menu
            ref="menu"
            :return-value.sync="menu"
            transition="scale-transition"
            min-width="290px"
        >
            <template v-slot:activator="{on}">
                <v-text-field
                    v-model="date"
                    v-bind="$attrs"
                    prepend-icon="mdi-calendar"
                    :nudge-right="40"
                    :error-messages="errors[0]"
                    readonly
                    v-on="on"
                    clearable
                    @click:clear = "onClear()"
                ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                @input="menu = false"
                no-title
                first-day-of-week="1"
            >
            </v-date-picker>
        </v-menu>
    </ValidationProvider>
</template>

<script>

import { ValidationProvider } from 'vee-validate';
import format from 'date-fns/format'

export default {
    components: {
        ValidationProvider
    },
    props: {
        value: {
            type: String,
            default: null
        },
        rules: {
            type: [Object, String],
            default: ''
        },
        vid: {
            type: String
        }
    },
    data: () => ({
        menu: false
    }),
    computed: {
        date: {
            get() {
                if (this.value) {
                    return format(new Date(this.value), "yyyy-MM-dd");
                }
                return null;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    methods: {
        onCancel() {
            this.menu = false
        },
        onClear() {
            this.$nextTick(() => {
                this.date = null;
            })
        }
    }
}
</script>

