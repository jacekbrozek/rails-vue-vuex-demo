import Vue from "vue"
import Vuex from "vuex"
import { FETCH_TASKS } from './actions.type'
import { SET_TASKS } from './mutations.type'
import { Task } from '../models/task'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    [SET_TASKS](state, tasks) {
      state.tasks = tasks
    },
  },
  getters: {
    tasks: state => state.tasks,
  },
  actions: {
    async [FETCH_TASKS]({ commit }) {
      Task.all()
        .then(response => response.data)
        .then(tasks => commit(SET_TASKS, tasks))
    }
  }
})
