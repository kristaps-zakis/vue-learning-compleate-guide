<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <user-data :userName="user.name" :userAge="user.age" class="user-datas"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" @input="setFirstName" placeholder="First Name" />
      <input type="text" v-model="user.lastName" placeholder="Last name" />
      <input type="text" placeholder="Custom text" ref="customText" />
      <button @click="setCustomText">Set custom text</button>
    </div>
    <h4>{{ fullName }}</h4>
  </section>
</template>


<script setup>
import { ref , provide, onBeforeMount } from 'vue';
import UserData from './components/UserData.vue';
import { reactive, computed, watch } from 'vue';

onBeforeMount(function() {
  console.log('onBeforeMount');
})

// const user = ref({
//   name: 'Maximilian',
//   age: 31
// })

const customText = ref(null);

const user = reactive({
  name: 'Maximilian',
  firstName: "",
  lastName: "",
  age: 31
});


watch([customText], (newVal, oldVal) => {
  console.log('new:', newVal);
  console.log('old:', oldVal);
});


let oldSnapshot = JSON.parse(JSON.stringify(user)); // initial snapshot

watch(user, (newVal, oldVal) => {
  const newSnapshot = JSON.parse(JSON.stringify(newVal));
  
  // console.log('new:', newSnapshot);
  // console.log('old:', oldSnapshot);

  oldSnapshot = newSnapshot; // update the snapshot for next time
}, { deep: true });

function setNewAge() {
  user.age = 33
}
provide('user', user);

function setFirstName(event) {
  user.firstName = event.target.value
}

function setCustomText() {
  user.firstName = customText.value.value;
}

const fullName = computed(function() {
  return user.firstName + " " + user.lastName;
})

// setTimeout(function() {
//   // user.value.name = 'Max';
//   // user.value.age = 32;
//   user.name = 'Max';
//   user.age = 32;
// }, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>