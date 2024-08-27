import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () =>import  ('../views/signupView.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () =>import  ('../views/TodoListView.vue')
    },
    
  ]
})

export default router
