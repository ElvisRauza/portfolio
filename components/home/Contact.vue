<template>
  <section class="contact">
    <div class="container container--medium">
      <div class="contact__content">
        <h2
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 100
          }"
          class="block-title animate animate--fade-in"
        >
          {{ data.title }}
        </h2>
        <div
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 400
          }"
          class="animate animate--fade-in"
        >
          <a class="btn btn-outline" :href="`mailto:${data.email}`"
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
  props: {
    data: {
      type: Object,
      required: true
    }
  },
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
