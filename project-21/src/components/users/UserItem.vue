<template>
  <li>
    <h3>{{ userName }}</h3>
    <button @click="viewProjects">View Projects</button>
  </li>
</template>

<script setup>
  import { defineEmits, defineProps } from 'vue';
  const {id, userName} = defineProps(['id', 'userName']);
  const emit = defineEmits(['list-projects']);

  function viewProjects() {
    emit('list-projects', id);
  }
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>