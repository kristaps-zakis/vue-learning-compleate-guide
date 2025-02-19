const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue === '') {
        return;
      }
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
