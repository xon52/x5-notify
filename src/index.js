import x5NVue from './js/main.js'
import './scss/index.scss'

export default {
  // Public Methods
  message: (options = {}) => x5NVue.addMessage({ options }),
  modal: (component, options = {}) => x5NVue.addModal({ component, options }),
  alert: options =>
    x5NVue.addModal({ options: { ...options, ...{ type: 'alert' } } }),
  confirm: options =>
    x5NVue.addModal({ options: { ...options, ...{ type: 'confirm' } } }),
  prompt: options =>
    x5NVue.addModal({ options: { ...options, ...{ type: 'prompt' } } }),

  install (Vue, options = {}) {
    // Set options
    if (options.position) x5NVue.position = options.position
    if (options.zIndex) x5NVue.zIndex = options.zIndex

    // Create and mount HTML element for new Vue
    const el = document.createElement('div')
    el.setAttribute('id', 'x5-n-vue')
    document.body.appendChild(el)
    x5NVue.$mount('#x5-n-vue')

    // Create hooks on main vue
    Vue.prototype.$message = this.message
    Vue.prototype.$modal = this.modal
    Vue.prototype.$alert = this.alert
    Vue.prototype.$confirm = this.confirm
    Vue.prototype.$prompt = this.prompt
  }
}
