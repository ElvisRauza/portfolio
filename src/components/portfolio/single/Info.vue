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
          <About :item="item" />
        </div>
        <div class="col col-40">
          <BuiltWith :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BuiltWith from "@/components/portfolio/single/BuiltWith";
import About from "@/components/portfolio/single/About";

export default {
  name: "PortfolioInfo",
  components: {
    BuiltWith,
    About,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
