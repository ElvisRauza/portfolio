<template>
  <!-- Add visit website -->
  <!-- Add technologies used -->
  <section class="hero">
    <div class="container">
      <router-link
        class="btn"
        to="/"
      >
        Back
      </router-link>
      <div class="hero__main">
        <img
          class="portfolio__image"
          :src="item.image.src"
          :alt="item.image.alt"
        />
        <div class="hero__content">
          <h1 class="hero__title">
            {{ item.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioHero",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &__back {
  }

  &__main {
    position: relative;
    max-width: 900px;
    margin: 0 auto;

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($black, 0.5);
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba($black, 0.9) 100%
      );
    }
  }

  &__image {
  }

  &__content {
    position: absolute;
    z-index: 2;
    bottom: 20px;
    left: 15px;
    right: 15px;
  }

  &__title {
    margin: 0;

    font-size: 30px;
  }
}
</style>
