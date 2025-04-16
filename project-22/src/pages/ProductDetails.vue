<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';

const products = inject('products');

const {pid} = defineProps(['pid']);

const selectedProduct = computed(() =>
  products.value.find((product) => product.id === pid)
); // Replace 'p1' with the actual product ID you want to display
const title = computed(() => selectedProduct.value?.title || "unknown");
const price = computed(() => selectedProduct.value?.price || 0);
const description = computed(() => selectedProduct.value?.description || "unknown");

console.log(selectedProduct);
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>