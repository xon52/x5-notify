<template>
  <div class="x5-n-dialog">
    <div v-if="title" class="x5-n-header">
      {{title}}
      <span v-if="!permanent" class="x5-n-close" @click.self="close">❌</span>
    </div>
    <div class="x5-n-content">
      <p v-if="text">{{text}}</p>
      <div v-if="isPrompt">
        <input v-model="input" />
        <p class="x5-n-errors">{{errors[0]}}</p>
      </div>
    </div>
    <div class="x5-n-footer">
      <button v-if="!isAlert" @click="cancelClick">{{labelCancel}}</button>
      <button class="x5-n-ok" :disabled="errors.length>0" @click="okClick">{{labelOK}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "x5-n-dialog",
  props: ["close", "options"],
  data() {
    return {
      input: null,
      isAlert: this.options.type === "alert",
      isConfirm: this.options.type === "confirm",
      isPrompt: this.options.type === "prompt",
      labelOK: this.options.labelOK || "OK",
      labelCancel: this.options.labelCancel || "Cancel",
      labels: {
        ...{ ok: "OK", cancel: "Cancel" },
        ...this.options.labels
      },
      onCancel: this.options.onCancel,
      onOK: this.options.onOK,
      permanent: this.options.permanent,
      rules: this.options.rules,
      text: this.options.text,
      title: this.options.title
    }
  },
  computed: {
    errors() {
      if (!this.isPrompt || !this.rules) return []
      return this.rules.map(e => e(this.input)).filter(e => e !== true)
    }
  },
  methods: {
    async cancelClick() {
      if (this.onCancel) this.onCancel()
      this.close()
    },
    async okClick() {
      if (this.onOK) this.onOK()
      this.close(this.isPrompt ? this.input : true)
    }
  }
}
</script>
