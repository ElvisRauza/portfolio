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
        Some Things I’ve Built
      </h2>
      <div class="portfolio__items">
        <PortfolioItemFeatured
          v-for="(item, i) in portfolios"
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
  data() {
    return {
      portfolios: []
    }
  },
  async fetch() {
    this.portfolios = await this.$content('portfolios')
      .where({ featured: true })
      .limit(4)
      .fetch()
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
