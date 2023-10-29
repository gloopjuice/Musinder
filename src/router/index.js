import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue' 
import AppHomePage from '../views/AppHomePage.vue'

import Swipearea from '../views/Swipearea.vue'
import Chatarea from '../views/Chatarea.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

import Sarakste from '../views/Sarakste.vue'

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
      path: '/Profile',
      name: "Profile",
      component: Profile
    },
    {
      path: '/Settings',
      name: "Settings",
      component: Settings
    },
    {
      path: '/Sarakste',
      name: "Sarakste",
      component: Sarakste
    },
  ]
})


 
export default router
