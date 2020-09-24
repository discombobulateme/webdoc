/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Profile from '../views/profile.vue'

Vue.use(VueRouter)

export default store => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/',
        name: 'profile',
        component: Profile
      },
      {
        path: '/users/:id',
        name: 'UserDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue')
      }
      // {
      //   path: '/athletes',
      //   name: 'Athletes',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/athletes.vue')
      // }
      // {
      //   path: '/jumps',
      //   name: 'Jumps',
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/jumps.vue')
      // }
      // {
      //   path: '/athletes/:id',
      //   name: 'AthleteProfile',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/athlete-profile.vue')
      // },
      // {
      //   path: '/jumps/:id',
      //   name: 'JumpProfile',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/jump-profile.vue')
      // },
      // {
      //   path: '/account/edit-athlete',
      //   name: 'EditAthlete',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/edit-athlete.vue')
      // },
      // {
      //   path: '/account/edit-jump',
      //   name: 'EditJump',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/edit-jump.vue')
      // }
    ]
  })
}
