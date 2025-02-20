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

app.component('friend-content', {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'julie',
        name: 'Julie Jones',
        phone: '0987 6543 210',
        email: 'G7OyG@example.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this.detailsAreVisible);
    },
  },
});

app.mount('#app');
