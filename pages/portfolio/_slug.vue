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
      portfolio: {},
      meta: {
        title: '',
        desc: '',
        imageUrl: ''
      }
    }
  },
  async fetch() {
    const portfolios = await this.$content('portfolios')
      .where({ slug: this.$route.params.slug })
      .fetch()
    this.portfolio = portfolios.shift()
    this.meta = {
      title: this.portfolio.title,
      desc: this.portfolio.content.substring(0, 50),
      imageUrl: this.portfolio.image.src
    }
  },
  head() {
    return {
      title: `${this.meta.title} | Elvis Rauza`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.desc
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$nuxt.$route.fullPath
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.meta.imageUrl
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.meta.desc
        }
      ]
    }
  }
}
</script>

<style></style>
