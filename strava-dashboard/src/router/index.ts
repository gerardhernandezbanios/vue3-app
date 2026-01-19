import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


import Dashboard from '../pages/Dashboard.vue'
import Activities from '../pages/Activities.vue'
import Maps from '../pages/Maps.vue'
import Stats from '../pages/stats.vue'
import Challeges from '../pages/Challenges.vue'
import Profile from '../pages/Profile.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Dashboard },
  { path: '/activities', component: Activities },
  { path: '/maps', component: Maps   },
  { path: '/stats', component: Stats },
  { path: '/challenges', component: Challeges },
  { path: '/profile', component: Profile }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
