import App from './App.vue'
import Vue from 'vue'

const x5NVue = new Vue({
  name: 'x5-N-Plugin',
  data: {
    notices: [],
    options: { zIndex: 200, position: 'bottom-right' },
    defaultOptions: {
      closeOnClick: true,
      wait: 5,
    },
  },
  methods: {
    add(options, text) {
      // Initial notice creation
      let notice = null
      if (typeof options === 'string') notice = { options: { type: options, text } }
      else if (typeof options === 'object') notice = { options: { ...this.defaultOptions, ...options } }
      else throw new Error(`Invalid parameter ${JSON.stringify(options)} used in x5Notify.`)
      // Set key
      notice.key = Math.floor(Math.random() * 10000000)
      this.notices.push(notice)
    },
    remove(key) {
      this.notices = this.notices.filter(e => e.key !== key)
    },
    setOptions(payload) {
      this.options = { ...this.options, ...payload }
    },
  },
  render: h => h(App),
})

export default x5NVue
