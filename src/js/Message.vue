<template>
  <div
    ref="message"
    :class="`x5-n-message x5-n-${typeClass} ${visible?'x5-n-visible':''}`"
    @click="click"
  >
    <div v-html="text"></div>
    <span v-if="closeOnClick" class="x5-n-click-to-dismiss">(click to dismiss)</span>
  </div>
</template>

<script>
export default {
  name: 'x5-n-message',
  props: ['options'],
  data () {
    return {
      closeOnClick: this.options.closeOnClick || true,
      onClick: this.options.onClick,
      onClose: this.options.onClose,
      text: this.options.text,
      timeout: null,
      type: this.options.type,
      visible: false,
      wait: this.options.wait || 5,
    }
  },
  computed: {
    typeClass () {
      const o = ['success', 'warning', 'error', 'special', 'info']
      return o.includes(this.type) ? this.type : 'default'
    }
  },
  methods: {
    click () {
      if (this.onClick) this.onClick()
      this.$emit('click')
      if (this.closeOnClick) this.close()
    },
    close () {
      clearTimeout(this.timeout)
      if (this.onClose) this.onClose()
      this.visible = false
      setTimeout(() => this.$emit('close'), 1000)
    }
  },
  mounted () {
    setTimeout(() => (this.visible = true), 100)
    this.timeout = setTimeout(() => this.close(), this.wait * 1000)
  }
}
</script>
