<template>
    <Layout>
        <v-card class="text-center">
            <v-card-title class="justify-center pt-9 text-h4"> Welcome </v-card-title>
            <v-card-subtitle>Signin to your account.</v-card-subtitle>
            <v-card-text class="mt-5">
                <v-form class="pb-5" v-model="valid" ref="form">
                    <v-alert
                        v-model="showAlert"
                        border="left"
                        close-text="Close Alert"
                        color="deep-orange accent-4"
                        dark
                        dismissible
                    >
                        {{ errorMessage }}
                    </v-alert>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        placeholder="address@email.com"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password"
                        :rules="[(v) => !!v || 'Password is required']"
                        label="Password"
                        placeholder="***********"
                        required
                        outlined
                    ></v-text-field>
                    <v-btn color="primary " large @click="submit" block :loading="loading"
                        >Submit
                        <template v-slot:loader>
                            <span>Loading...</span>
                        </template></v-btn
                    >
                </v-form>
            </v-card-text>
        </v-card>
        <div class="text-center pt-12">
            Don't have an account?
            <router-link :to="{ name: 'register' }">Create one here</router-link>
        </div>
    </Layout>
</template>
<script>
import Layout from '../layouts/auth.vue'
import rules from '../../utils/form'
import { authMethods } from '../../state/helpers'
export default {
    components: {
        Layout,
    },
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            errorMessage: '',
            showAlert: false,
            loading: false,
        }
    },
    computed: {
        ...rules,
    },
    methods: {
        ...authMethods,
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true
                this.logIn({
                    email: this.email,
                    password: this.password,
                })
                    .then(() => {
                        this.$router.push({ name: 'home' })
                        this.loading = false
                    })
                    .catch((error) => {
                        this.showAlert = true
                        this.errorMessage = 'There was an error logging in to your account.'
                        this.loading = false
                    })
            }
        },
    },
}
</script>