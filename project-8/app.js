const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 4567 890',
          email: 'G7OyG@example.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 6543 210',
          email: 'G7OyG@example.com',
        },
      ],
    };
  },
});

app.mount('#app');
