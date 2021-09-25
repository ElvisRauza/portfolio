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
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolios: []
    }
  },
  async fetch() {
    this.portfolios = await this.$content('portfolios').fetch()
  },
  head: {
    title: 'Portfolios | Elvis Rauza',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding-top: 130px;
}
</style>
