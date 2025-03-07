import { createStore } from 'vuex'

const counterModule = {
    namespaced: true,
      state() {
        return {
          count: 0,
        };
      },
      mutations: {
        addOne(state) {
          // state.count++;
          state.count = state.count + 2
        },
    
        increase(state, payload) {
            console.log(state)
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
        // testAuth(state, getters, rootState, rootGetters) {
        testAuth(state) {
          return state.isAuthenticated;  
        },
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
    }
    
    const store = createStore({
      modules: {
        numbers: counterModule,
      },
    
      state() {
        return {
          isAuthenticated: false,
        }
      },
      mutations: {
        login(state, payload) {
          state.isAuthenticated = payload.isAuth
        },
        logout(state) {
          state.isAuthenticated = false
        },
      },
    
      actions: {
        login(context) {
          context.commit('login', { isAuth: true })
        },
        logout(context) {
          context.commit('logout', { isAuth: false })
        },
      },
      getters: {
        isAuthenticated(state) {
          console.log(`Check is auth`)
          return state.isAuthenticated
        },
      },
    })

    export default store;