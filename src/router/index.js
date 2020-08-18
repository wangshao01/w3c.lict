import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Fome from '@/components/Fome'
import ferttor from '@/components/ferttor'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ferttor',
    name: 'ferttor',
    component: ferttor
  },
  {
    path: '/Fome',
    name: 'Fome',
    component: Fome
  }
]

const router = new VueRouter({
  routes
})

export default router
