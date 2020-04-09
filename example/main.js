import Vue from 'vue'
import App from './App.vue'
import store from './store'

// ------------------------------
// x5-notify plugin install START
// ------------------------------
import x5Notify from '../src'
Vue.use(x5Notify, store)
// ------------------------------
// x5-notify plugin install END
// ------------------------------

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
