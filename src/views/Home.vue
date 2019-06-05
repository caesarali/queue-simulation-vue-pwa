<template>
    <v-container class="fill-height">
        <v-layout text-xs-center wrap align-center justify-center>
            <v-flex xs12>
                <v-img :src="require('../assets/queue.svg')" class="my-3" contain height="200"></v-img>
            </v-flex>

            <v-flex xs12>
                <h1 class="font-weight-thin mb-3">Hy, Welcome to</h1>
                <h1 class="font-weight-bold text-uppercase">
                    Queue Simulation
                </h1>
                <h1 class="font-weight-light mb-3">SmartCalculator</h1>
            </v-flex>

            <v-flex xs12>
                <v-btn color="teal" dark class="pl-4 pr-4" large :to="{ name: 'queue' }">
                    <v-icon dark class="mr-2">play_circle_outline</v-icon> GET STARTED
                </v-btn>
                <v-btn color="teal" dark class="pl-4 pr-4" large outline href="https://github.com/caesarali" target="_blank">GITHUB</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.commit('resetHeader')
    }
}
</script>
