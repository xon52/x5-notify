<template>
  <transition-group
    :name="transitionName"
    tag="div"
    :class="`x5-n-notices x5-n-${position}`"
    :style="`z-index:${zIndex}`"
  >
    <x5-notice :notice="n" :key="n.key" v-for="n in notices"></x5-notice>
  </transition-group>
</template>

<script>
import x5Notice from './Notice.vue'

export default {
  name: 'x5-N-Component',
  components: { x5Notice },
  props: {
    position: { type: String, default: 'bottom-right' },
    zIndex: { type: [String, Number], default: 200 },
    max: { type: [String, Number], default: 5 },
  },
  computed: {
    notices() {
      if (this.position.includes('top')) return [...this.$store.getters['x5/n/notices']].reverse()
      return this.$store.getters['x5/n/notices']
    },
    transitionName() {
      return this.position.includes('left') ? 'x5-n-slide-left' : 'x5-n-slide-right'
    },
  },
  mounted() {
    this.$store.dispatch('x5/n/max', +this.max)
  },
}
</script>
