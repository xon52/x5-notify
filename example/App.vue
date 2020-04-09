<template>
  <div class="wrapper">
    <div class="center">
      <img class="logo" src="./img/logo.svg" width="300" />
      <h1 class="title">x5-Notify Example</h1>
      <!-- Position -->
      <div class="line">------------------------</div>
      <h2>Notifications' Position Property</h2>
      <table style="margin:0 auto;">
        <template v-for="y in yPositions">
          <tr :key="y">
            <template v-for="x in xPositions">
              <button :key="x" style="width:110px;" :style="position === `${y}-${x}` ? 'background:lightblue;' : ''" @click="position = `${y}-${x}`">{{ `${y}-${x}` }}</button>
            </template>
          </tr>
        </template>
      </table>
      <!-- Types -->
      <div class="line">------------------------</div>
      <h2>Types</h2>
      <div class="row">
        <textarea id="text-input" v-model="text" rows="2" cols="40"></textarea>
      </div>
      <div class="row">
        <template v-for="type in types">
          <button :key="type" class="button" @click="notify(type)">{{ type }}</button>
        </template>
      </div>
      <!-- HTML/Icons -->
      <div class="line">------------------------</div>
      <h2>HTML/Icons</h2>
      <p>The content/text of a notice does not have to be text and can be HTML.</p>
      <button class="button" @click="notifyIcon()">ICON example</button>
      <div class="line">------------------------</div>
      <!-- Extra -->
      <h2>Callbacks</h2>
      <p>This button calls back another everytime you close it.</p>
      <p>A notice has callback properties for onClick() and onClose() events.</p>
      <button class="button" @click="start">Start</button>
      <button :disabled="stop" class="button" @click="stop = true">Stop</button>
      <h5>You can click start a few times for a show.</h5>
    </div>
    <!-- Plugin Component -->
    <x5-notify :position="position"></x5-notify>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'This is some example text you can change.',
    types: ['success', 'warning', 'error', 'info', 'special', 'default'],
    xPositions: ['left', 'center', 'right'],
    yPositions: ['top', 'center', 'bottom'],
    position: 'bottom-right',
    stop: true
  }),
  methods: {
    notify(type) {
      this.$notify({
        type,
        text: this.text ? `${this.text}` : type
      })
    },
    notifyIcon() {
      this.$notify({
        type: 'special',
        text: `<svg viewBox="0 0 128 128"><path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"/><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"/><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"/></svg> <strong>VueJS</strong> is the best ❤`
      })
    },
    loop() {
      if (this.stop) return
      this.$notify({
        type: this.types[Math.floor(Math.random() * this.types.length)],
        text: 'Repeating',
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
  margin: 0 auto;
  max-width: 800px;
}
.center {
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
