<template>
  <section class="hero full">
    <div class="hero__main">
      <img
        class="hero__image"
        :src="item.image.src"
        :alt="item.image.alt"
      />
      <div class="hero__content">
        <h1 class="hero__title">
          {{ item.title }}
        </h1>
      </div>
    </div>
    <div class="hero__visit">
      <a
        class="hero__visit-btn"
        :href="item.websiteUrl"
        target="_blank"
        rel="nofollow"
      >
        <span>Visit Website</span>
      </a>
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
  display: flex;
  height: 90vh;

  &__main {
    position: relative;
    overflow: hidden;
    flex: 1;

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
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    font-size: 4rem;
  }

  &__visit-btn {
    width: 10rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.33s;
    background: $blue;

    span {
      display: block;
      white-space: nowrap;
      transform: rotate(90deg);
    }

    &:hover {
      
    }
  }
}
</style>
