import Vue from 'vue'
import App from './App.vue'

import x5Notify from '../dist'
Vue.use(x5Notify)

new Vue({
  el: '#app',
  render: h => h(App),
})
