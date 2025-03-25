<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';

import { computed, ref, watch, defineProps } from 'vue';
  const { user } = defineProps(['user']);

  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const hasProjects = computed(() => {
    return user?.projects && user?.projects.length > 0;
  });

  const availableProjects = computed(() => {
    if (activeSearchTerm.value) {
      return user.projects.filter((prj) =>
        prj.title.includes(activeSearchTerm.value)
      );
    }
    return user.projects;
  });

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  watch(() => user, () => {
    enteredSearchTerm.value = '';
  })
  
  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>