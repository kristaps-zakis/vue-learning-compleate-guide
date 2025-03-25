<template>
    <div>

        <h2>!! {{ userName }}</h2>
        <h3>{{ userAge }}</h3>
        <h4>{{ age }}</h4>
    </div>
</template>

<script setup>
import { useAttrs, useSlots, inject, watch } from 'vue';
defineProps(['userName', 'userAge'])

const user = inject('user');

let age = user.age;

watch(user, function() {
    age = user.age
})

console.log(user);


const attrs= useAttrs();
const slots = useSlots();

console.log(attrs, slots);

</script>