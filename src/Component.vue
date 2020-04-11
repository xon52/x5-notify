<template>
  <transition-group
    :name="transitionName"
    tag="div"
    :class="`x5-n-notices ${positionClass}`"
    :style="`z-index:${zIndex}`"
  >
    <x5-notice :notice="n" :key="n.key" v-for="n in notices" />
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
    max: { type: [String, Number], default: 5 }
  },
  computed: {
    notices() {
      if (this.position.includes('top')) return [...this.$store.getters['x5/n/notices']].reverse()
      return this.$store.getters['x5/n/notices']
    },
    transitionName() {
      return this.position.includes('-left')
        ? 'x5-n-slide-left'
        : this.position.includes('-center')
        ? 'x5-n-slide-center'
        : 'x5-n-slide-right'
    },
    positionClass() {
      const xPos = this.position.includes('-left') ? 'left' : this.position.includes('-center') ? 'x-center' : 'right'
      const yPos = this.position.includes('top-') ? 'top' : this.position.includes('center-') ? 'y-center' : 'bottom'
      return `x5-n-${xPos} x5-n-${yPos}`
    }
  },
  mounted() {
    this.$store.dispatch('x5/n/max', +this.max)
  }
}
</script>
