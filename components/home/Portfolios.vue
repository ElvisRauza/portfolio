<template>
  <section class="portfolio">
    <div class="container container--medium">
      <h2 class="block-title">Some Things I’ve Built</h2>
      <div class="flexbox flexbox--full">
        <div
          v-for="item in portfolios"
          :key="item.id"
          class="col col-50 col-s-full"
        >
          <PortfolioItem :item="item" />
        </div>
      </div>
      <div class="portfolio__all">
        <nuxt-link class="btn btn-outline" to="/portfolio">View all projects</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioItem from '@/components/portfolio/Item.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem
  },
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
