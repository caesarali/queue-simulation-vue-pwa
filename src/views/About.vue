<template>
    <v-container>
        <v-layout text-center>
            <h3>About</h3>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.commit('setHeader', 'About')
    }
}
</script>

