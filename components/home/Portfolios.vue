<template>
  <section class="portfolio">
    <div class="container container--medium">
      <h2 class="block-title">Some Things I’ve Built</h2>
      <div class="portfolio__items">
        <PortfolioItemFeatured
          v-for="(item, i) in portfolios"
          :key="i"
          :item="item"
        />
      </div>
      <div class="portfolio__all">
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
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &__all {
    text-align: center;
    margin: 30px 0 0;
  }
}
</style>
