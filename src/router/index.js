import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/pages/Landing'
import Trick from '@/pages/Trick'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },

    {
      path: '/trick',
      name: 'Trick',
      component: Trick
    }
  ]
})
