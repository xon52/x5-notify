<template>
  <div :style="`z-index:${zIndex};`">
    <div class="x5-n-modals">
      <x5-modal
        v-if="modal"
        :options="modal.options"
        :type="modal.type"
        :component="modal.component"
        :resolve="modal.resolve"
        @close="closeModal(modal.key)"
      ></x5-modal>
    </div>
    <div :class="`x5-n-messages x5-n-${position}`">
      <x5-message
        :key="m.key"
        :options="m.options"
        v-for="m in messages"
        @close="closeMessage(m.key)"
      >{{m.text}}</x5-message>
    </div>
  </div>
</template>

<script>
import x5Message from "./Message.vue"
import x5Modal from "./Modal.vue"

export default {
  name: "x5-n-app",
  components: { x5Message, x5Modal },
  computed: {
    zIndex() {
      return this.$root.zIndex || 200
    },
    messages() {
      return this.$root.messages
    },
    position() {
      const o = ["bottom-right", "top-left", "top-right", "bottom-left"]
      return o.includes(this.$root.position) ? this.type : o[0]
    },
    modal() {
      return this.$root.modals[0]
    }
  },
  methods: {
    closeMessage(key) {
      this.$root.removeMessage(key)
    },
    closeModal(key) {
      this.$root.removeModal(key)
    }
  }
}
</script>
