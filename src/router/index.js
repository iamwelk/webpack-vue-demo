import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'

let routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

export default new Router({
  routes: routers
})