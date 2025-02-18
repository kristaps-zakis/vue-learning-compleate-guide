const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
      confirmedName: '',
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

    confirmInput() {
      this.confirmedName = this.userName;
    },

    handleSubmit() {
      console.log('Form submitted!');
    },
  },
});

app.mount('#events');
