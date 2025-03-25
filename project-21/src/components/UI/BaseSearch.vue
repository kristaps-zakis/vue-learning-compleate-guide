<template>
  <form>
    <input type="search" @input="search" :value="searchTerm" placeholder="Filter items" />
  </form>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const { searchTerm } = defineProps(['searchTerm']);
  const emit = defineEmits(['search']);

  function search(event) {
    emit('search', event.target.value);
  }
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>