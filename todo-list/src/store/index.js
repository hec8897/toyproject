import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Mode:'light',
    TodoList:[]
  },
  mutations: {
    AddList(state,data){
      state.TodoList.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
