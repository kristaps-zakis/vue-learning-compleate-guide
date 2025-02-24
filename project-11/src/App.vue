<template>
  <div>
    <the-header></the-header> 

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
  </div>
</template>

<script>
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import TheHeader from './components/TheHeader.vue';

export default { 
  components: { TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      selectedComponents: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponents = cmp;
    }
  }  
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>