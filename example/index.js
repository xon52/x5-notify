import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import x5Notify from '../dist'
// import x5Notify from '../src'

Vue.use(Vuex)
const store = new Vuex.Store()

Vue.use(x5Notify, store)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
