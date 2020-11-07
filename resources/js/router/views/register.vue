<template>
    <Layout>
        <v-card class="text-center">
            <v-card-title class="justify-center pt-9 text-h4">Create an account. </v-card-title>
            <v-card-subtitle>and, create your team dashboard.</v-card-subtitle>
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
                        v-model="name"
                        :rules="nameRules"
                        label="Fullname"
                        placeholder="eg: Bob Smith"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        placeholder="eg: address@email.com"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        placeholder="***********"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password_confirmation"
                        :rules="passwordConfirmationRule"
                        label="Confirm Password"
                        placeholder="***********"
                        required
                        outlined
                    ></v-text-field>
                    <v-btn color="primary " :loading="loading" large @click="submit" block
                        >Submit
                        <template v-slot:loader>
                            <span>Loading...</span>
                        </template>
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        <div class="text-center pt-12">
            Already have an account?
            <router-link :to="{ name: 'login' }">Login here</router-link>
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
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            valid: false,
            errorMessage: '',
            passwordConfirmationRule: [
                (value) => value === this.password || 'The password confirmation does not match.',
            ],
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
                this.register({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                    .then(() => {
                        this.$router.push({ name: 'home' })
                        self.loading = false
                    })
                    .catch((error) => {
                        let _error = error.response.data
                        this.showAlert = true
                        this.errorMessage = _error.errors.join('<br/>')
                        this.loading = false
                    })
            }
        },
    },
}
</script>