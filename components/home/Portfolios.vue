<template>
  <section class="portfolio">
    <div class="container">
      <h2 class="block-title">My work</h2>
      <div class="flexbox flexbox--full">
        <div
          v-for="item in portfolios"
          :key="item.id"
          class="col col-50 col-s-full"
        >
          <PortfolioItem :item="item" />
        </div>
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

<style></style>
