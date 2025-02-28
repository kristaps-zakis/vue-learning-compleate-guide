import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      count: 0,
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
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
