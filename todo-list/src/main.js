import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/default.scss'


Vue.config.productionTip = false
Vue.use(require('vue-moment'));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
