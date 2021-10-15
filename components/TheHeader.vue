<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">Elvis Rauza</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
   @include resp-max('s') {
    padding: 15px 0;
    background-color: $bg-color;
    box-shadow: 0 10px 30px -10px #000826;
  }
   @include resp-min('s') {
    padding: 30px 0;
  }
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
}
</style>
