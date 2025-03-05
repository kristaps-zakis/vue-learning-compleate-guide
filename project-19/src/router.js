import { createRouter, createWebHistory } from 'vue-router'

import CoachesList from './pages/coaches/CoachesList.vue'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'

import PageNotFound from './pages/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: "<div>Home</div>"
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
          // /choaches/c12/contact
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegister,
    },
    {
      path: '/requests',
      component: RequestsReceived,
    },
    {
      path: '/:notFound(.*)',
      component: PageNotFound,
    },
  ],
})

export default router
