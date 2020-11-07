<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col cols="5">
                    <h2 class="pt-9">
                        Teams
                        <small class="text-body-2"
                            ><router-link :to="{ name: 'create_team' }">Create</router-link></small
                        >
                    </h2>
                </v-col>
                <v-col cols="7">
                    <v-text-field
                        class="mt-5"
                        v-model="search"
                        append-icon="search"
                        filled
                        rounded
                        dense
                        label="Search Teams"
                        type="text"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="team in teamsFiltered" :key="team.id" cols="4">
                    <v-card height="160" @click="showDetails(team.id)">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1"> {{ team.name }} </v-list-item-title>
                                <v-list-item-subtitle>{{ team.phone_number }}</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar size="80">
                                <v-icon size="80">{{ team.icon }}</v-icon>
                            </v-list-item-avatar>
                        </v-list-item>
                        <v-card-actions>
                            <div class="overline mx-2"> Created: {{ team.created_at }} </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" class="justify-center mt-12" v-if="showPopulate">
                    <v-banner single-line>
                        <v-icon slot="icon" color="warning" size="36"> announcement </v-icon>
                        Seems you don't have any teams. You can <b>populate</b> some teams or <b>create</b> a new team.

                        <template v-slot:actions>
                            <v-btn color="primary" text @click="populate"> Populate </v-btn>
                        </template>
                    </v-banner>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="detailsDailog" v-if="detailsDailog" max-width="450" scrollable>
            <TeamDetails :team="teamIdForCard" /> 
        </v-dialog>
    </Layout>
</template>
<script>
import Layout from '../layouts/main.vue'
import { teamsComputed, teamMethods } from '../../state/helpers'
import Nprogress from 'nprogress/nprogress'
import TeamDetails from '../../components/showTeamCard'

export default {
    components: {
        Layout,
        TeamDetails,
    },
    data() {
        return {
            search: '',
            showPopulate: false,
            detailsDailog: false,
            teamIdForCard: null,
        }
    },
    computed: {
        ...teamsComputed,
        teamsFiltered() {
            // This will initially return all the teams data, if user searches using search input this function filters teams
            // by their name.
            return this.teams
                ? this.teams.filter((team) => {
                      if (!this.search) {
                          return true
                      }
                      return team.name.toUpperCase().indexOf(this.search.toUpperCase()) !== -1
                  })
                : []
        },
    },
    created() {
        Nprogress.start()
        this.fetchTeams().then(() => {
            Nprogress.done()
            if (!this.teams.length) {
                this.showPopulate = true
            }
        })
    },
    methods: {
        ...teamMethods,
        populate() {
            Nprogress.start()
            this.populateTeams().then(() => {
                Nprogress.done()
            })
        },
        showDetails(team) {
            this.detailsDailog = true
            this.teamIdForCard = team
        },
    },
}
</script>