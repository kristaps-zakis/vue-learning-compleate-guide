const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      userName: '',
      confirmedName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log('Running fullName');
      if (this.userName === '') {
        return '';
      }

      return this.userName + ' Zaķis';
    },
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

    resetName() {
      this.userName = '';
      this.confirmedName = '';
    },
    outputFullName() {
      console.log('Running outputFullName');
      if (this.userName === '') {
        return '';
      }

      return this.userName + ' Zaķis';
    },
  },
});

app.mount('#events');
