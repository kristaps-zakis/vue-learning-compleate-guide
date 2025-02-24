<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
   
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <!-- <template v-slot="item"> -->
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals>

    <!-- If only one template aka default, can be moved outside template-->
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: { TheHeader, UserInfo, BadgeList, CourseGoals },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  mounted() {
    console.log(this.$attrs)
  },
  
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