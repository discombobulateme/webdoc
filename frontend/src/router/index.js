import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
// import Account from '../views/account.vue'

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
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.account) return next('/')
          return next()
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.account) return next('/')
          return next()
        }
      }
      // {
      //   path: '/account',
      //   name: 'Account',
      //   component: Account
      // },
      // {
      //   path: '/athletes',
      //   name: 'Athletes',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/athletes.vue')
      // },
      // {
      //   path: '/jumps',
      //   name: 'Jumps',
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/jumps.vue')
      // },
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
