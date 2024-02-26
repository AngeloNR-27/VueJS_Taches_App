import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tasks from '../components/Tasks.vue' // Assurez-vous que le chemin d'importation est correct

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
      path: '/tasks', // Assurez-vous que le chemin est correct
      name: 'tasks', // Ce nom doit correspondre à celui utilisé dans this.$router.push
      component: () => import('../components/Tasks.vue') // Assurez-vous que le chemin d'importation est correct
    }    
  ]
})

export default router
