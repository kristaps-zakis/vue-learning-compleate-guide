import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import UsersFooter from './components/users/UsersFooter.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // component: TeamList,
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      //   component: TeamList,
      components: {
        default: TeamList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // teams/t1
      ],
      //   alias: '/',
    },

    {
      path: '/users',
      //   component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
      //   redirect: '/teams',
    },
  ],
  //   linkActiveClass: 'active',
})

const app = createApp(App)

app.use(router)

app.mount('#app');
