<template>
  <PortfolioHero :item="item" />
  <PortfolioInfo :item="item" />
</template>

<script>
import PortfolioHero from "@/components/portfolio/single/Hero";
import PortfolioInfo from "@/components/portfolio/single/Info";

export default {
  name: "SinglePorfolio",
  components: {
    PortfolioHero,
    PortfolioInfo,
  },
  computed: {
    item() {
      return this.$store.getters.getPorfolio(this.$route.params.slug);
    },
  },
};
</script>

<style></style>
