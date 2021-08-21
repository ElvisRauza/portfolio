<template>
  <section class="portfolio">
    <div class="container">
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
import PortfolioItem from "@/components/home/PortfolioItem.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
  },
  computed: {
    items() {
      return this.$store.state.porfolio
    }
  }
};
</script>

<style></style>
