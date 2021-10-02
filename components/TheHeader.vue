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
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
}
</style>
