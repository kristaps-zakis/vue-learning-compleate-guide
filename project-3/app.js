const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
    };
  },
  methods: {
    setName(event, lastName) {
      /*
      by default passes the event object, if not said different
      if need pass default event, adding $event in template function with extra parameters
      */
      this.userName = event.target.value + ' ' + lastName;
    },
    addCount(num) {
      this.counter += num;
    },
    removeCount() {
      this.counter--;
    },
  },
});

app.mount('#events');
