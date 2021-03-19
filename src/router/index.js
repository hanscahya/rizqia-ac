import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import TipsMerawatAC from '@/views/TipsMerawatAC'
import TipsMembeliAC from '@/views/TipsMembeliAC'
import ACMatiTibaTiba from '@/views/ACMatiTibaTiba'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tips-merawat-ac',
      name: 'TipsMerawatAC',
      component: TipsMerawatAC
    },
    {
      path: '/tips-membeli-ac',
      name: 'TipsMembeliAC',
      component: TipsMembeliAC
    },
    {
      path: '/ac-mati-tiba-tiba',
      name: 'ACMatiTibaTiba',
      component: ACMatiTibaTiba
    }
  ]
})
