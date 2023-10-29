import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue' 
import AppHomePage from '../views/AppHomePage.vue'

import page1 from '../views/page1.vue'
import page2 from '../views/page2.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/registerpage',
      name: "RegisterPage",
      component: RegisterPage
    },
    {
      path: '/loginpage',
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: '/',
      name: "homepage",
      component: HomePage
    },
    {
      path: '/apphomepage',
      name: "AppHomePage",
      component: AppHomePage
    },
    {
      path: '/Swipearea',
      name: "Swipearea",
      component: Swipearea
    },
    {
      path: '/Chatarea',
      name: "Chatarea",
      component: Chatarea
    },
    {
      path: '/page3',
      name: "page3",
      component: page3
    },
    {
      path: '/page4',
      name: "page4",
      component: page4
    },
  ]
})


 
export default router
