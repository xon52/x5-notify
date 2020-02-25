<template>
  <div class="wrapper">
    <img class="logo" src="./x5-n-logo.svg" width="300" />
    <h1 class="title">x5-Notify Example</h1>
    <div class="row">
      <textarea id="text-input" v-model="text" rows="2" cols="40"></textarea>
    </div>
    <div class="row">
      <template v-for="type in types">
        <button :key="type" class="button" @click="notify(type)">{{type}}</button>
      </template>
    </div>
    <div class="line">------------------------</div>
    <!-- Extra -->
    <h2>Callbacks</h2>
    <p>This button calls back another everytime you close it.</p>
    <p>A notice has callback properties for onClick() and onClose() events.</p>
    <button class="button" @click="start">Start</button>
    <button :disabled="stop" class="button" @click="stop=true">Stop</button>
    <h5>You can click start a few times for a show.</h5>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "This is some example text you can change.",
    types: ["success", "warning", "error", "info", "special", "default"],
    stop: true
  }),
  methods: {
    notify(type) {
      this.$notify({
        type,
        text: this.text ? `${this.text}` : type
      })
    },
    loop() {
      if (this.stop) return
      this.$notify({
        type: this.types[Math.floor(Math.random() * this.types.length)],
        text: "Repeating",
        wait: 1,
        onClose: this.loop
      })
    },
    start() {
      this.stop = false
      this.loop()
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.row {
  margin-bottom: 10px;
}
.line {
  margin: 30px 0;
}
button {
  padding: 10px;
  min-width: 100px;
}
</style>