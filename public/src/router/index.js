import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import shiffman from '@/components/info/shiffman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info/shiffman',
      name: 'shiffman',
      component: shiffman
    }
  ]
})
