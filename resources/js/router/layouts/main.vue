<template>
    <v-app id="inspire" light>
        <v-app-bar app>
            <v-toolbar-title class="toolbar-title">
                <v-icon>sports_soccer</v-icon>
                Playerize
            </v-toolbar-title>
            <v-tabs centered class="ml-n8" color="grey darken-1" width="400">
                <v-tab :to="{ name: 'home' }"> Teams </v-tab>
            </v-tabs>
            <v-avatar class="hidden-sm-and-down" color="grey lighten-2  shrink" size="32">
                <v-btn :to="{ name: 'logout' }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon v-bind="attrs" v-on="on">power_settings_new</v-icon>
                        </template>
                        <span>Logout</span>
                    </v-tooltip>
                </v-btn>
            </v-avatar>
        </v-app-bar>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script>
export default {
    components: {},
    data: () => ({ drawer: null }),
}
</script>
<style scoped lang="scss">
.theme--light.v-application {
    background: #f2f5f8;
    color: rgba(0, 0, 0, 0.87);
}
.toolbar-title {
    overflow: visible;
    text-overflow: inherit;
}
</style>