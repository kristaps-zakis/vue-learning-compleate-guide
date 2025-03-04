<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Increase</button>
    <change-counter></change-counter>
  </base-container>

  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue'
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // })

      this.$store.dispatch({
        type: 'increase',
        value: 10,
      })
      // console.log("Called")
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
