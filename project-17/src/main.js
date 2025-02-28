import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      count: 0,
      isAuthenticated: false,
    }
  },
  mutations: {
    addOne(state) {
      // state.count++;
      state.count = state.count + 2
    },

    increase(state, payload) {
      state.count += payload.value
    },
    login(state, payload) {
      state.isAuthenticated = payload.isAuth;
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },

  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('addOne')
      }, 2000)
    },

    increase(context, payload) {
      console.log(context)
      context.commit('increase', payload)
    },
    login(context) {
      context.commit('login', { isAuth: true })
    },
    logout(context) {
      context.commit('logout', { isAuth: false })
    },
  },
  getters: {
    finalCounter(state) {
      return state.count * 2
    },
    normalizeCounter(state, getters) {
      const finalCounter = getters.finalCounter

      if (finalCounter < 0) {
        return 0
      }

      if (finalCounter > 100) {
        return 100
      }

      return finalCounter
    },
    isAuthenticated(state) {
        console.log(`Check is auth`);
      return state.isAuthenticated
    }
  },
})


const app = createApp(App)
app.use(store)
// app.use(authState)
app.mount('#app')
