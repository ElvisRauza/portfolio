<template>
  <section class="portfolio">
    <div class="container">
      <h2 class="block-title">
        My work
      </h2>
      <div class="flexbox flexbox--full">
        <div
          v-for="item in items"
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
import PortfolioItem from "@/components/portfolio/Item.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
  },
  computed: {
    items() {
      return this.$store.state.porfolio;
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding-top: 130px;
}
</style>
