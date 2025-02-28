<template>
  <transition-group name="user-list" tag="ul">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <input type="text" ref="userNameInput" />
  <button @click="addUser">Add User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Anna', 'Chris', 'Manu'],
      user: '',
    }
  },
  methods: {
    addUser() {
      const newUser = this.$refs.userNameInput.value
      this.users.unshift(newUser)
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user)
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px) scale(0.9);
}
.user-list-enter-active {
  transition: all 1s ease-out;
  /* animation: modal 0.3s ease-out; */
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(0.9);
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
