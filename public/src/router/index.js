import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

var theoffice = () => import('@/components/info/theoffice')
var shiffman = () => import('@/components/info/shiffman')
var got = () => import('@/components/info/got')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/info/theoffice',
      name: 'theoffice',
      component: theoffice
    },
    {
      path: '/info/got',
      name: 'got',
      component: got
    }
  ]
})
