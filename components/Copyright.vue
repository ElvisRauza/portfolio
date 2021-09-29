<template>
  <div class="copyright">
    <p class="copyright__text">&copy; {{ year }} Elvis Rauza</p>
  </div>
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
.copyright {
  @include resp-min('s') {
    position: fixed;
    left: 40px;
    bottom: 50px;
    text-align: left;

    transform: rotate(-90deg);
    transform-origin: bottom left;
  }
  @include resp-max('s') {
    padding: 15px;
    text-align: center;
  }

  &__text {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
