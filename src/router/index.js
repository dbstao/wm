import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/Msite',
      component: Msite,
      meta: {
        is: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        is: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        is: true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta: {
        is: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Msite'
    }
  ]
})
