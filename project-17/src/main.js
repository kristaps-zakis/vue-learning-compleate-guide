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
    }
})


const app = createApp(App);
app.use(store);
app.mount('#app');
