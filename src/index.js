import Vue from 'vue'
import x5NVue from './js/x5NVue.js'
import './scss/index.scss'

export default {
  // Public Methods
  notify: x5NVue.add,

  install(Vue, options) {
    // Set options
    x5NVue.setOptions(options)
    // Create and mount HTML element for new Vue
    const el = document.createElement('div')
    el.setAttribute('id', 'x5-n-vue')
    document.body.appendChild(el)
    x5NVue.$mount('#x5-n-vue')
    // Create hook on main vue
    Vue.prototype.$notify = this.notify
  },
}
