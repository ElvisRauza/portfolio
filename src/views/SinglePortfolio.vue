<template>
  <PortfolioHero :item="item" />
  <PortfolioContent :item="item" />
</template>

<script>
import PortfolioHero from '@/components/portfolio/Hero';
import PortfolioContent from '@/components/portfolio/Content';
export default {
  name: 'SinglePorfolio',
  components: {
    PortfolioHero,
    PortfolioContent
  },
  computed: {
    item() {
      return this.$store.getters.getPorfolio(this.$route.params.slug);
    },
  }
}
</script>

<style>

</style>