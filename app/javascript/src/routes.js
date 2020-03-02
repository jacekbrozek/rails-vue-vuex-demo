import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/pages/home/'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'root_path' },
  ]
})

export default router
