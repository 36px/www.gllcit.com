import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import BusinessInfo from '../views/BusinessInfo.vue'
import CompanyInfo from '../views/CompanyInfo.vue'
import HistoryProjects from '../views/HistoryProjects.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/home',
    name: 'home2',
    component: Home
  },

  {
    path: '/business',
    name: 'business-info',
    component: BusinessInfo
  },

  {
    path: '/company',
    name: 'company-info',
    component: CompanyInfo
  },

  {
    path: '/projects',
    name: 'history-projects',
    component: HistoryProjects
  },

  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
