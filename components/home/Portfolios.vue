<template>
  <section class="portfolio">
    <div class="container container--medium">
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
      <div class="portfolio__items">
        <PortfolioItemFeatured
          v-for="(item, i) in data.items"
          :key="i"
          :item="item"
        />
      </div>
      <div
        v-observe-visibility="{
          callback: handleAnimation,
          once: true,
          throttle: 500
        }"
        class="portfolio__all animate animate--fade-in"
      >
        <nuxt-link class="btn btn-outline" to="/portfolio"
          >View all projects</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
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
.portfolio {
  &__all {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
