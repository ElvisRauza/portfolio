<template>
  <div>
    <PortfolioSingleHero :item="portfolio" />
    <PortfolioSingleInfo :item="portfolio" />
  </div>
</template>

<script>
export default {
  name: 'SinglePorfolio',
  data() {
    return {
      portfolio: {}
    }
  },
  async fetch() {
    const portfolios = await this.$content('portfolios')
      .where({ slug: this.$route.params.slug })
      .fetch()
    this.portfolio = portfolios.shift()
  },
  head() {
    return {
      title: `${this.portfolio.title} | Elvis Rauza`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.portfolio.content.substring(0, 50)
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$nuxt.$route.fullPath
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.portfolio.image.src
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.portfolio.content.substring(0, 50)
        }
      ]
    }
  }
}
</script>

<style></style>
