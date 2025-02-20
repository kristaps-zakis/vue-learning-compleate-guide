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
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;

      // this.$refs.userText -- vanilla JS object
      console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('Before Create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('Before Update');
  },
  updated() {
    console.log('Updated');
  },
});

app.mount('#app');
// app.unmount();

const app2 = Vue.createApp({
  template: `
    <h2>{{ favoriteMeal }}</h2>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});
app2.mount('#app2');

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

    // console.log(target);
    // console.log(key);
    // console.log(value);
    // target[key] = value;
  },
};

const proxy = new Proxy(data, handler);
proxy.message = 'Vue is great! x2';

// console.log(proxy.message);
// console.log(proxy.longMesage);