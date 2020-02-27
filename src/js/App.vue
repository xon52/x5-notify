<template>
  <div :class="`x5-n-notices x5-n-${$root.options.position}`" :style="`z-index:${$root.options.zIndex}`">
    <x5-notice :key="m.key" :options="m.options" v-for="m in notices" @close="close(m.key)">{{ m.text }}</x5-notice>
  </div>
</template>

<script>
import x5Notice from './Notice.vue'

export default {
  name: 'x5-N-App',
  components: { x5Notice },
  computed: {
    notices() {
      return this.$root.notices
    },
  },
  methods: {
    close(key) {
      this.$root.remove(key)
    },
  },
}
</script>
