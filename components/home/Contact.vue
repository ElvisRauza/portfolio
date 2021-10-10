<template>
  <section class="contact">
    <div class="container container--medium">
      <div class="contact__content">
        <h2
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 300
          }"
          class="block-title animate animate--fade-in"
        >
          Get In Touch
        </h2>
        <div
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 600
          }"
          class="animate animate--fade-in"
        >
          <a class="btn btn-outline" href="mailto:elvis.rauza@gmail.com"
            >Say Hello</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeContact',
  methods: {
    handleAnimation(isVisible, e) {
      if (isVisible) {
        const el = e.target
        el.classList.add('animated')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  &__content {
    text-align: center;
  }
}
</style>
