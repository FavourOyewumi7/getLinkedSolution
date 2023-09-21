import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import ContactPage from './pages/ContactPage.vue'
import RegisterPage from './pages/RegisterPage.vue'

const routes = [
    { 
      path: '/', 
      component: LandingPage 
    },
    {
      path:'/contact',
      component:ContactPage
    },
    {
      path:'/register',
      component:RegisterPage
    }

  ]


    const router = createRouter({
        history: createWebHistory(),
        routes
      })
    
      export default router
