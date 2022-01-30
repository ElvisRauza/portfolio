<template>
  <div class="portfolio">
    <div class="portfolio__head">
      <div class="flexbox">
        <div class="col col-10 col-s-25">
          <p>Year</p>
        </div>
        <div class="col col-30 col-s-50">
          <p>Title</p>
        </div>
        <div class="col col-10 col-s-none">
          <p>Made at</p>
        </div>
        <div class="col col-40 col-s-none">
          <p>Built with</p>
        </div>
        <div class="col col-10 col-s-25">
          <p>Link</p>
        </div>
      </div>
    </div>
    <div class="portfolio__list">
      <PortfolioItem
        v-for="(item, i) in portfolios"
        :key="i"
        :item="item"
        :index="i"
      />
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

<style lang="scss" scoped>
.portfolio {
  &__head {
    color: $slate;
    font-weight: 700;

    p {
      margin: 0;
    }
  }

  &__list {
    @include resp-max('s') {
      margin: 15px 0 0;
    }
    @include resp-min('s') {
      margin: 15px -35px 0;
    }
  }
}
</style>
