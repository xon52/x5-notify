<template>
  <div style="padding: 20px;">
    <h1>This is a custom modal</h1>
    <p>It is sent the close() method as a prop.</p>
    <p>
      It can be called without any value:
      <button @click="close()">close</button>
    </p>
    <p>
      Or with a value (
      <strong>"w00t!"</strong>):
      <button @click="close('w00t!')">close</button>
    </p>
    <p>But unfortunately, loses it's "this" context, so you must make standalone components for it now.</p>
  </div>
</template>

<script>
export default {
  name: "Custom",
  props: {
    close: { type: Function }
  }
}
</script>