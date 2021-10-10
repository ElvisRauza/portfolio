<template>
  <section class="portfolio">
    <div class="container container--medium">
      <h2 class="block-title">My work</h2>
      <PortfolioList />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
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
  padding-top: 100px;
}
</style>
