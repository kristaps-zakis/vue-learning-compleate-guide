<template>
  <ul class="stars">
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="active('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'avarage' }">
      <button type="button" @click="active('avarage')">Avarage</button>
    </li>
    <li :class="{ active: activeOption === 'good' }">
      <button type="button" @click="active('good')">Good</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    }
  },
  methods: {
    active(option) {
      this.activeOption = option
    },
  },
}
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
