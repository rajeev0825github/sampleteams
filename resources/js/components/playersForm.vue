<template>
    <v-row class="px-3">
        <v-col cols="4">
            <v-text-field
                v-model="playerData.first_name"
                label="First name"
                validate-on-blur
                :rules="[(v) => !!v || 'First name is required']"
                @change="changed"
            />
        </v-col>
        <v-col cols="4">
            <v-text-field
                v-model="playerData.last_name"
                label="Last name"
                validate-on-blur
                :rules="[(v) => !!v || 'Last name is required']"
                @change="changed"
            />
        </v-col>
        <v-col cols="4">
            <v-select
                v-model="playerData.type"
                :items="types"
                label="Player type"
                validate-on-blur
                required
                append-outer-icon="delete_outline"
                @change="changed"
                :rules="[(v) => !!v || 'Type is required']"
                @click:append-outer="deletePlayer"
            />
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        index: {
            require: true,
            type: Number,
        },
        player: {
            require: false,
            type: Object,
        },
    },
    data() {
        return {
            playerData: {
                id: '',
                first_name: '',
                last_name: '',
                type: '',
                index: this.index,
            },
        }
    },
    computed: {
        types() {
            return ['captain', 'player', 'substitute']
        },
    },
    created() {
        this.playerData.index = this.index
        this.playerData.id = this.player.id || ''
        this.playerData.first_name = this.player.first_name || ''
        this.playerData.last_name = this.player.last_name || ''
        this.playerData.type = this.player.type || ''
    },
    methods: {
        changed() {
            this.$emit('change', this.playerData)
        },
        deletePlayer() {
            this.$emit('delete', this.playerData)
        },
    },
}
</script>