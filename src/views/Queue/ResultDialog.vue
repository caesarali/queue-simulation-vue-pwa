<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card tile>
                <v-toolbar dark color="teal" fixed>
                    <v-btn icon @click="dialog = false">
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                    <v-toolbar-title class="ml-0">Results</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="resetForm">
                        <v-icon>replay</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-content class="pb-0">
                    <v-container>
                        <b>Info : </b>
                        <v-subheader class="pa-0 mb-1">
                            Scroll halaman kesamping (kanan/kiri) untuk melihat keseluruhan isi tabel.
                        </v-subheader>
                        <result :variable="variable"></result>
                    </v-container>
                </v-content>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import Result from "./Result"
export default {
    components: { Result },
    props: {
        variable: [Object, Array],
    },
    data () {
        return {
            dialog: false
        }
    },
    methods: {
        resetForm() {
            this.$parent.resetForm()
            this.dialog = false
        }
    }
}
</script>