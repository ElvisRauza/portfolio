<template>
  <!-- Add visit website -->
  <section class="info">
    <div class="container">
      <div class="flexbox">
        <div class="col col-60">
          <!-- <router-link
            class="hero__back"
            to="/"
          >
            Back
          </router-link> -->
          <PortfolioSingleAbout :item="item" />
        </div>
        <div class="col col-40">
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
