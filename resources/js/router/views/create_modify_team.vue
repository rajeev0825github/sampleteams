<template>
    <Layout>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="7">
                    <v-card class="px-4">
                        <div class="text-center pt-7 pb-3 text-h4">
                            <v-btn class="float-left" text :to="{ name: 'home' }"><v-icon>chevron_left</v-icon></v-btn>
                            <span class="text-capitalize">{{ view }} Team</span>
                        </div>

                        <v-alert v-model="alertBox" dense outlined type="error" dismissible>{{
                            validationError
                        }}</v-alert>
                        <v-form ref="form" v-model="validated">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="team.name"
                                    label="Name"
                                    validate-on-blur
                                    :rules="[(v) => !!v || 'Name is required']"
                                    data-cy="input_team_name"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="team.phone_number"
                                    label="Phone number"
                                    validate-on-blur
                                    :rules="[(v) => !!v || 'Phone number is required']"
                                    data-cy="input_team_phone_number"
                                />
                            </v-col>
                            <v-subheader v-if="team.id">Players</v-subheader>
                            <PlayerForm
                                v-for="(player, index) in players"
                                :key="index"
                                :index="index"
                                :player="player"
                                @change="changePlayer"
                                @delete="triggerDeletePlayer"
                                v-if="showPlayers && team.id"
                            />
                            <v-col cols="12" v-if="team.id">
                                <a @click="addPlayerForm">Add player</a>
                            </v-col>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text data-cy="save_team_btn" @click="saveTeam"
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>

            <v-dialog v-model="dialogSuccess" max-width="350" data-cy="success_dialog">
                <v-card data-cy="success_dialog">
                    <v-card-title class="headline">Success!</v-card-title>

                    <v-card-text>Team {{ view }}ed succesfully.</v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="green darken-1" text @click="dialogSuccess = false">Ok</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </Layout>
</template>
<script>
import Layout from '../layouts/main.vue'
import { teamMethods, playerMethods } from '../../state/helpers'
import NProgress from 'nprogress/nprogress'
import PlayerForm from '../../components/playersForm.vue'
import Vue from 'vue'
export default {
    components: {
        Layout,
        PlayerForm,
    },
    data: () => ({
        view: 'create',
        team: {
            id: null,
            name: '',
            phone_number: '',
            icon: 'sports_baseball',
        },
        players: [],
        showPlayers: true, // We need to refresh forms once the delete occures
        validated: false,
        dialogSuccess: false,
        alertBox: false,
        validationError: '',
    }),
    computed: {
        redirectTo() {
            if (this.view == 'create') {
                return { name: 'home' }
            } else {
                return ''
            }
        },
    },
    created() {
        if (this.$route.meta.edit) {
            this.view = 'edit'
            this.team = this.$route.params.team
            this.players = this.$route.params.team.players
        } else {
            this.view = 'create'
        }
    },
    methods: {
        ...teamMethods,
        ...playerMethods,
        validate() {
            return this.$refs.form.validate()
        },
        saveTeam() {
            if (this.validate()) {
                NProgress.start()
                this.save()
                    .then((response) => {
                        const data = response.data
                        NProgress.done()
                        this.team = data
                        this.dialogSuccess = true
                    })
                    .catch((error) => {
                        console.log(error)
                        if (error.response && error.response.status === 422) {
                            this.validationError = [].concat.apply([], Object.values(error.response.data.errors)).join() //flattening the errors to string
                            this.alertBox = true
                        } else {
                            this.validationError = "Something went wrong and we 're investigating about it."
                            this.alertBox = true
                        }
                    })
            }
        },
        save() {
            if (this.view == 'edit') {
                return this.updateTeam(this.team)
            } else {
                return this.createTeam(this.team)
            }
        },
        addPlayerForm() {
            this.players.push({})
        },
        changePlayer(data) {
            if (data.first_name && data.last_name && data.type) {
                this.players[data.index] = data
                data.team_id = this.team.id
                NProgress.start()
                this.savePlayer(data).then((response) => {
                    this.players[data.index] = response.data
                    NProgress.done()
                    this.refreshPlayersForm()
                })
            }
        },
        triggerDeletePlayer(data) {
            Vue.delete(this.players, data.index)
            this.refreshPlayersForm()
            NProgress.start()
            this.deletePlayer(data)
                .then(() => {
                    NProgress.done()
                })
                .catch((error) => {
                    NProgress.done()
                    console.warn(error)
                })
        },
        refreshPlayersForm() {
            let self = this
            self.showPlayers = false

            this.$nextTick(function () {
                self.showPlayers = true
            })
        },
        savePlayer(data) {
            if (data.id) {
                return this.updatePlayer(data)
            } else {
                return this.createPlayer(data)
            }
        },
    },
}
</script>