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
      meta: {
        needsAuth: true,
      },
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
      beforeEnter(to, from, next) {
        console.log('users beforeEnter')
        console.log(to, from)
        next()
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
      //   redirect: '/teams',
    },
  ],
  //   linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // to and from accesable also in this.$route
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
})

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)

  if (to.meta.needsAuth) {
    console.log('Needs auth')
  }
  //   next(false)
  next(true)
  // next('/teams')

  //   if (to.name === 'team-members') {
  //     next()
  //   } else {
  //     next({
  //       name: 'team-members',
  //       params: { teamId: 't3' },
  //     })
  //   }
})

router.afterEach(function (to, from) {
  console.log('Global afterEach')
  console.log(to, from)

  // dont have next
  // good for analytics
})

const app = createApp(App)

app.use(router)

app.mount('#app');
