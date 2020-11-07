<template>
    <v-card :loading="loading" class="mx-auto">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <v-card-title>{{ teamData.name }}</v-card-title>
        <v-card-subtitle>{{ teamData.phone_number }}</v-card-subtitle>

        <v-subheader class="mx-2">Players</v-subheader>
        <v-card-text>
            <div v-for="player in teamData.players" :key="player.id" class="my-3">
                <div class="subtitle-1 text-bold">{{ player.first_name + ' ' + player.last_name }}</div>
                <div class="text-capitalize">{{ player.type }}</div>
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="edit"> Edit </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { teamMethods } from '../state/helpers'

export default {
    props: {
        team: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            loading: true,
            teamData: {},
        }
    },
    created() {
        this.fetchTeam(this.team).then((data) => {
            this.teamData = data
            this.loading = false
        })
    },
    methods: {
        ...teamMethods,
        edit() {
            this.$router.push({
                name: 'edit_team',
                params: { team: this.teamData.id },
            })
        },
    },
}
</script>