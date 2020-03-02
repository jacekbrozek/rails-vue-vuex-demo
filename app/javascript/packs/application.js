import Vue from 'vue'
import Vuex from 'vuex'
import App from '../app'
import VueRouter from 'vue-router'
import router from '../src/routes.js'
import store from '../src/store'

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
