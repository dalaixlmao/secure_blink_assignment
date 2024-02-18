import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/screens/Landing.vue'
import Login from '../components/screens/Login.vue'
import Dashboard from '../components/screens/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router