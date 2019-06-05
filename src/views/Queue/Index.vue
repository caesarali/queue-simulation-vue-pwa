<template>
    <div>
        <v-form ref="form" lazy-validation @submit.prevent="submitForm()">
            <v-container>
                <v-subheader class="pa-0">
                    Variables : <v-spacer></v-spacer>
                    <v-btn class="ma-0 hidden-md-and-up" icon flat color="teal" @click="resetForm"><v-icon>replay</v-icon></v-btn>
                </v-subheader>
                <v-layout row wrap justify-center>
                    <v-flex grow>
                        <v-text-field type="number" :counter="10" v-model="form.a" :rules="rules.number" label="Konstanta (a)" color="teal" clearable required :autofocus="!$root.isMobile"></v-text-field>
                    </v-flex>

                    <v-flex grow>
                        <v-text-field type="number" :counter="10" v-model="form.c" :rules="rules.number" label="Konstanta (c)" color="teal" clearable required></v-text-field>
                    </v-flex>

                    <v-flex grow>
                        <v-text-field type="number" :counter="10" v-model="form.m" :rules="rules.number" label="Modulo (m)" color="teal" clearable required></v-text-field>
                    </v-flex>

                    <v-flex grow>
                        <v-text-field type="number" :counter="10" v-model="form.z" :rules="rules.number" label="RN Awal (Zo)" color="teal" clearable required></v-text-field>
                    </v-flex>

                    <v-flex grow>
                        <v-text-field type="number" :counter="10" v-model="form.queue_length" :rules="rules.number" label="Panjang Antrian" color="teal" clearable required></v-text-field>
                    </v-flex>

                    <v-flex xs12 class="hidden-md-and-up">
                        <v-btn block color="teal" dark type="submit">Calculate</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        <v-container class="pa-3 hidden-sm-and-down">
            <v-divider class="mb-4"></v-divider>
            <v-subheader class="pa-0">
                Results : <v-spacer></v-spacer>
                <v-btn icon flat color="teal" @click="resetForm"><v-icon>replay</v-icon></v-btn>
            </v-subheader>
            <result :variable="form"></result>
            <result-dialog ref="result" :variable="form"></result-dialog>
        </v-container>
    </div>
</template>

<script>
import Result from "./Result";
import ResultDialog from "./ResultDialog";
export default {
    components: { Result, ResultDialog },
    data: () => ({
        dialog: false,
        form: {
            a: '',
            c: '',
            m: '',
            z: '',
            queue_length: ''
        },
        rules: {
            number: [
                v => !!v || 'Field is required',
                v => !!v && v.length <= 10 || 'Number must be less than 10 digits'
            ]
        }
    }),

    methods: {
        resetForm() {
            this.$refs.form.reset()
            this.$refs.form.resetValidation()
        },
        submitForm() {
            let validate = this.$refs.form.validate()
            if (validate && this.$vuetify.breakpoint.smAndDown) {
                this.$refs.result.dialog = true
            }
        }
    },

    created() {
        this.$store.commit('setHeader', 'Queue Simulation')
    }
}
</script>