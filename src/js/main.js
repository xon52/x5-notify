import Vue from 'vue'
import App from './App.vue'

// New Vue Instance for Main.vue
const x5NVue = new Vue({
  data: {
    position: null,
    messages: [],
    modals: [],
    zIndex: 200
  },
  methods: {
    addModal (modal) {
      const promise = new Promise(resolve => (modal.resolve = resolve))
      modal.key = Math.floor(Math.random() * 10000)
      this.modals.unshift(modal)
      return promise
    },
    removeModal (key) {
      this.modals = this.modals.filter(e => e.key !== key)
    },
    addMessage (message) {
      message.key = Math.floor(Math.random() * 10000)
      this.messages.push(message)
    },
    removeMessage (key) {
      this.messages = this.messages.filter(e => e.key !== key)
    }
  },
  render: h => h(App)
})

export default x5NVue
