import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tasks from '../components/Tasks.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/tasks', 
      name: 'tasks', 
      component: () => import('../components/Tasks.vue') 
    }    
  ]
})

export default router
