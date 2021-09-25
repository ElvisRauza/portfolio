<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__copyright">&copy; {{ year }} Elvis Rauza</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 0;
  text-align: center;

  &__copyright {
    font-size: 12px;
  }
}
</style>
