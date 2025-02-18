const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCount(num) {
      this.counter += num;
    },
    removeCount() {
      this.counter--;
    },
  },
});

app.mount('#events');
