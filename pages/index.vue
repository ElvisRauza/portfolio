<template>
  <div>
    <HomeHero :data="hero" />
    <HomeAboutMe :data="about" />
    <HomePortfolios :data="portfolios" />
    <HomeContact :data="contact" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hero: {},
      about: {},
      portfolios: {},
      contact: {}
    }
  },
  async fetch() {
    const data = await this.$content('home').fetch()
    this.hero = data.hero
    this.about = data.about
    this.portfolios = data.portfolios
    this.portfolios.items = await this.$content('portfolios')
      .where({ featured: true })
      .limit(4)
      .fetch()
    this.contact = data.contact
  },
  head: {
    title: 'Elvis Rauza',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Elvis Rauza is a web developer who specializes in building wordpress websites'
      }
    ]
  }
}
</script>

<style></style>
