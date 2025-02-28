import { createApp } from 'vue';
import { createStore} from 'vuex'

import App from './App.vue';

const store = createStore ({
    state() {
        return {
            count: 0
        }
    }, 
    mutations: {
        addOne(state) {
            state.count++;
        },
        increase(state, payload) {
            state.count += payload.value;
        }
    },
    getters: {
        finalCounter(state) {
            return state.count * 2;
        },
        normalizeCounter(state, getters) {
            const finalCounter = getters.finalCounter;

            if (finalCounter< 0) {
                return 0
            }

            if (finalCounter > 100) {
                return 100
            }

            return finalCounter;
        }
    }
})


const app = createApp(App);
app.use(store);
app.mount('#app');
