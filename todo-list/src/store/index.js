import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TodoList:[
      {
        desc:'1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem totam minima atque consequatur tempora aperiam doloribus illum recusandae quod quia, error accusantium provident enim, aliquid blanditiis commodi tenetur quae.',
        date:'2021-01-17'
      },
      {
        desc:'2.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem totam minima atque consequatur tempora aperiam doloribus illum recusandae quod quia, error accusantium provident enim, aliquid blanditiis commodi tenetur quae.',
        date:'2021-01-18'
      },
      {
        desc:'3.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem totam minima atque consequatur tempora aperiam doloribus illum recusandae quod quia, error accusantium provident enim, aliquid blanditiis commodi tenetur quae.',
        date:'2021-01-19'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
