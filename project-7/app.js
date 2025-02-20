const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const data = {
  message: 'Vue is great!',
  longMesage: 'This is longer message',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMesage = value + ' World';
    }

    target.message = value;

    console.log(target);
    console.log(key);
    console.log(value);
    // target[key] = value;
  },
};

const proxy = new Proxy(data, handler);
proxy.message = 'Vue is great! x2';

console.log(proxy.message);
console.log(proxy.longMesage);