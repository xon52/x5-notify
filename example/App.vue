
<template>
  <div class="wrapper">
    <img class="logo" src="./logo.png" />
    <h1 class="title">x5-Notify Example</h1>
    <!-- Messages -->
    <h2>Messages</h2>
    <div class="row">
      <label for="message-text-input">Text for Messages:</label>
      <input id="message-text-input" v-model="messageText" />
    </div>
    <div class="row">
      <template v-for="type in messageTypes">
        <button :key="type" class="button" @click="message(type)">{{type}}</button>
      </template>
    </div>
    <!-- Dialogs -->
    <h2>Dialogs</h2>
    <div class="row">
      <label for="dialog-text-input">Text for Dialogs:</label>
      <input id="dialog-text-input" v-model="dialogText" />
    </div>
    <div class="row">
      <label for="dialog-title-input">Title for Dialogs:</label>
      <input id="dialog-title-input" v-model="dialogTitle" />
    </div>
    <div class="row">
      <button class="button" @click="alert">Alert</button>
      <button class="button" @click="confirm">Confirm</button>
      <button class="button" @click="prompt">Prompt</button>
    </div>
    <!-- Custom Modal -->
    <h2>Custom Modal</h2>
    <button class="button" @click="custom">Open</button>
  </div>
</template>

<script>
import Vue from "vue"
import Custom from "./Custom"

import x5Notify from "../dist"
Vue.use(x5Notify)

export default {
  data: () => ({
    messageText: "Some message text",
    dialogText: "You are about to do something that needs some thought.",
    dialogTitle: "This is an example title",
    messageTypes: ["success", "warning", "error", "info", "special", "default"]
  }),
  methods: {
    message(type) {
      this.$message({
        type,
        text: this.messageText ? `${this.messageText}` : type
      })
    },
    alert() {
      this.$alert({
        title: `${this.dialogTitle}`,
        text: `${this.dialogText}`
      }).then(res => {
        if (res) this.$message({ type: "success", text: "You pressed OK" })
        else this.$message({ type: "error", text: "You cancelled" })
      })
    },
    confirm() {
      this.$confirm({
        title: `${this.dialogTitle}`,
        text: `${this.dialogText}`
      }).then(res => {
        if (res) this.$message({ type: "info", text: "You pressed OK" })
        else this.$message({ type: "warning", text: "You cancelled" })
      })
    },
    prompt() {
      this.$prompt({
        title: `${this.dialogTitle}`,
        text: `${this.dialogText}`,
        rules: [v => (v && v.length > 3) || "Length must be >3."],
        permanent: true
      }).then(res => {
        if (res) this.$message({ type: "special", text: res })
        else this.$message({ type: "error", text: "You cancelled" })
      })
    },
    custom() {
      this.$modal(Custom, {
        permanent: true
      }).then(res => {
        if (res) this.$message({ type: "special", text: res })
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: center;
}
label {
  margin-right: 10px;
}
.row {
  margin-bottom: 10px;
}
button {
  padding: 10px;
  min-width: 100px;
}
</style>