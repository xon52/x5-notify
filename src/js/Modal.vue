<template>
  <div :class="`x5-n-modal-wrapper ${overlay?'x5-n-overlay':''}`" @click.self="overlayClick">
    <div
      :class="`x5-n-modal ${attention?'x5-n-attention':''} ${xClass}`"
      :style="`max-width:${width}px ${xStyle}`"
    >
      <component v-if="component" :is="component" :close="close" :options="options"></component>
      <x5-dialog v-else :close="close" :options="options"></x5-dialog>
    </div>
  </div>
</template>

<script>
import x5Dialog from './Dialog.vue'

export default {
  name: 'x5-n-modal',
  components: { x5Dialog },
  props: {
    options: { type: Object, default: () => ({}) },
    component: { type: Object, default: () => null },
    resolve: { type: Function, required: true }
  },
  data () {
    return {
      attention: false,
      onClose: this.options.cancelCB,
      overlay: this.options.overlay || true,
      permanent: this.options.permanent || false,
      width: this.options.width || 500,
      xClass: this.options.class || '',
      xStyle: this.options.style || ''
    }
  },
  methods: {
    close (val = false) {
      if (this.onClose) this.onClose()
      this.resolve(val)
      this.$emit('close', val)
    },
    async overlayClick () {
      if (this.overlay && !this.permanent) this.close()
      else {
        this.attention = true
        setTimeout(() => (this.attention = false), 150)
      }
    }
  }
}
</script>
