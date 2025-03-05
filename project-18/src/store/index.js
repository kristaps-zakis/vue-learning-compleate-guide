import { createStore } from 'vuex'

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
    modules: {
        products: productsModule,
        cart: cartModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        login(state) {
            console.log("login 3");
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },  
    actions: {
        login(context) {
            console.log("login 2");
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        }
    }
})

export default store;