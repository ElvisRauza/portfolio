<template>
  <section class="portfolio">
    <div class="container">
      <h2>About project</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioContent",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
