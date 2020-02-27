<template>
  <div ref="notice" :class="`x5-n-notice x5-n-${typeClass} ${visible ? 'x5-n-visible' : ''}`" @click="onClick">
    <div v-html="options.text"></div>
    <span v-if="options.closeOnClick" class="x5-n-click-to-dismiss">(click to dismiss)</span>
  </div>
</template>

<script>
export default {
  name: 'x5-N-Notice',
  props: ['options'],
  data: () => ({
    timeout: null,
    visible: false,
  }),
  computed: {
    typeClass() {
      const o = ['success', 'warning', 'error', 'special', 'info']
      return o.includes(this.options.type) ? this.options.type : 'default'
    },
  },
  methods: {
    onClick() {
      if (this.options.onClick) this.options.onClick()
      this.$emit('click')
      if (this.options.closeOnClick) this.close()
    },
    close() {
      clearTimeout(this.timeout)
      if (this.options.onClose) this.options.onClose()
      this.visible = false
      setTimeout(() => this.$emit('close'), 250)
    },
  },
  mounted() {
    setTimeout(() => (this.visible = true), 50)
    this.timeout = setTimeout(() => this.close(), this.options.wait * 1000)
  },
}
</script>
