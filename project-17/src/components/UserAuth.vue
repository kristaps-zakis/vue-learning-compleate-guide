<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Log out</button>
</template>

<script>
export default {
    methods: {
        login() {
            console.log(`dispatch login`)
            this.$store.dispatch('login', {isAuth: true})
        },
        logout() {
            this.$store.dispatch('logout')
        }       
    },
    computed: {
        isAuth() {
            return this.$store.getters.isAuthenticated
        }
    }
}
</script>