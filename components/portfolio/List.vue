<template>
  <div class="flexbox flexbox--full">
    <div v-for="item in portfolios" :key="item.id" class="col col-full">
      <PortfolioItem :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: []
    }
  },
  async fetch() {
    this.portfolios = await this.$content('portfolios').fetch()
  }
}
</script>

<style></style>
