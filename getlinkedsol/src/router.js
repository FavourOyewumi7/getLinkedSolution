import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import ContactPage from './pages/ContactPage.vue'

const routes = [
    { 
      path: '/', 
      component: LandingPage 
    },
    {
      path:'/contact',
      component:ContactPage
    }
  ]


    const router = createRouter({
        history: createWebHistory(),
        routes
      })
    
      export default router
