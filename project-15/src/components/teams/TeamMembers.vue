<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link replace="" to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users','teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],

      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    // loadTeamMembers(route) {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId;
    const selectedTeam = this.teams.find(team => team.id === teamId);
    const members = selectedTeam.members;

    this.teamName = selectedTeam.name;

    const selectedMembers = [];

    for (const member of members) {
      const selectedUser = this.users.find(user => user.id === member);

        selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    }
  },
  created() {
    // this.$route.path
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);

    //query parameters are not provided as props
    console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('team members beforeRouteUpdate');
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId);
    next();
    // this.loadTeamMembers(to);
  },
  watch: {
    // $route(newRoute) {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>