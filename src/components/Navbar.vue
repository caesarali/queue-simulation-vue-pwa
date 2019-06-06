<template>
    <v-toolbar dark color="teal" ref="navbar" app>
        <v-btn icon v-if="backButton" @click="$root.goBack">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn icon v-else>
            <v-icon>widgets</v-icon>
        </v-btn>
        <!-- <v-toolbar-side-icon v-else></v-toolbar-side-icon> -->
        <v-toolbar-title class="ml-0">{{ header }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu style="margin-right: -12px" transition="scale-transition" origin="top right" :close-on-content-click="false" :nudge-width="160">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on"><v-icon>more_vert</v-icon></v-btn>
            </template>
            <v-list dense>
                <v-subheader>Social</v-subheader>
                <v-list-tile href="https://github.com/caesarali" target="_blank">
                    <v-list-tile-action>
                        <v-icon>fab fa-github</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>GitHub</v-list-tile-title>
                </v-list-tile>
                <v-list-tile href="https://facebook.com/caesaralilamondo" target="_blank">
                    <v-list-tile-action>
                        <v-icon>fab fa-facebook</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Facebook</v-list-tile-title>
                </v-list-tile>
                <v-list-tile href="https://twitter.com/cesarali_L" target="_blank">
                    <v-list-tile-action>
                        <v-icon>fab fa-twitter</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Twitter</v-list-tile-title>
                </v-list-tile>

                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-switch v-model="$root.darkMode" color="teal"></v-switch>
                    </v-list-tile-action>
                    <v-list-tile-title>Dark Mode</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
export default {
    computed: {
        header() {
            return this.$store.state.header
        },
        backButton() {
            return this.$store.state.backButton
        }
    }
}
</script>
