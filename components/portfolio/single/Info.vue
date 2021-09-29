<template>
  <!-- Add visit website -->
  <section class="info">
    <div class="container container--medium">
      <div class="flexbox">
        <div class="col col-70 col-s-full">
          <!-- <router-link
            class="hero__back"
            to="/"
          >
            Back
          </router-link> -->
          <PortfolioSingleAbout :item="item" />
        </div>
        <div class="col col-30 col-s-full">
          <PortfolioSingleBuiltWith :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSingleInfo',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
