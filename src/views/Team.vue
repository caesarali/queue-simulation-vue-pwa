<template>
    <!-- <v-container> -->
        <v-layout row>
            <v-flex xs12>
                <v-subheader>Team Members</v-subheader>
                <v-list two-line>
                    <v-list-tile v-for="member in team" :key="member.id" avatar v-ripple>
                        <v-list-tile-avatar>
                            <v-icon :class="[member.iconClass]">{{ member.icon }}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ member.name }} <small v-if="member.dev" class="gray--text text--lighten">(Developer)</small> </v-list-tile-title>
                            <v-list-tile-sub-title>{{ member.id }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action v-if="member.dev">
                            <v-btn icon ripple>
                                <v-icon color="amber">fas fa-crown</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    <!-- </v-container> -->
</template>

<script>
export default {
    data() {
        return {
            team: [
                { icon: 'fas fa-user', iconClass: 'teal white--text', name: 'Caesar Ali L.', id: '20182215059', dev: true },
                { icon: 'fid fa-user', iconClass: 'teal white--text', name: 'Anggar Nuarika', id: '20182215001' },
                { icon: 'fid fa-user', iconClass: 'teal white--text', name: 'Kak Ecy', id: '20182215002' },
                { icon: 'fid fa-user', iconClass: 'teal white--text', name: 'Desi Iriani Tamrin', id: '20182215003' },
            ]
        }
    },
    created() {
        this.$store.commit('setHeader', 'Our Team')
    }
}
</script>

