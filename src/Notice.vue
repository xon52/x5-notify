<template>
  <div ref="notice" :class="`x5-n-notice x5-n-${typeClass}`" @click="onClick">
    <div v-html="notice.text"></div>
    <span v-if="notice.closeOnClick" class="x5-n-click-to-dismiss">(click to dismiss)</span>
  </div>
</template>

<script>
export default {
  name: 'x5-N-Notice',
  props: ['notice'],
  data: () => ({
    timeout: null,
  }),
  computed: {
    typeClass() {
      const o = ['success', 'warning', 'error', 'special', 'info']
      return o.includes(this.notice.type) ? this.notice.type : 'default'
    },
  },
  methods: {
    onClick() {
      this.notice.onClick()
      if (this.notice.closeOnClick) this.notice.close()
    },
  },
}
</script>
