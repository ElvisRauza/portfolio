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
  async asyncData(context) {
    // Get Data
    const data = await context.$content('home').fetch()
    const portfolioItems = await context
      .$content('portfolios')
      .where({ featured: true })
      .limit(4)
      .fetch()
    // Set data
    const metaData = data.metaData
    const hero = data.hero
    const about = data.about
    const portfolios = { ...data.portfolios, items: portfolioItems }
    const contact = data.contact
    // Return data
    return { metaData, hero, about, portfolios, contact }
  },
  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaData.desc
        }
      ]
    }
  }
}
</script>

<style></style>
