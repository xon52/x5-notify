import Component from './Component.vue'
import PluginStore from './store'
import './scss/index.scss'

const defaults = {
  closeOnClick: true,
  onClick: () => {},
  onClose: () => {},
  onClickText: '(click to dismiss)',
  wait: 5
}

export default function(Vue, store) {
  // Register Vuex store
  if (!store) throw new Error('A Vuex store is required by the x5Notify plugin')
  store.registerModule('x5/n', PluginStore)
  // Register component
  Vue.component('x5Notify', Component)
  // Create hook on main vue
  Vue.prototype.$notify = (options, text) => {
    const notices = store.getters['x5/n/notices']
    const max = store.getters['x5/n/max']
    // Early return if too many notices
    if (max > 0 && notices.length >= max) notices[0].forceClose()
    // Initial notice creation with defaults
    let notice
    if (typeof options === 'string') notice = { ...defaults, ...{ type: options, text } }
    else if (typeof options === 'object') notice = { ...defaults, ...options }
    else throw new Error(`Invalid parameter ${JSON.stringify(options)} used in x5Notify plugin.`)
    // Set key
    notice.key = Math.floor(Math.random() * 999999)
    // Set timeout
    notice.timeout = setTimeout(() => notice.close(), notice.wait * 1000)
    // Set close
    notice.close = () => {
      notice.onClose()
      notice.forceClose()
    }
    // Set force close
    notice.forceClose = () => {
      clearTimeout(notice.timeout)
      store.dispatch('x5/n/remove', notice.key)
    }
    // Add notice
    store.dispatch('x5/n/add', notice)
  }
}
