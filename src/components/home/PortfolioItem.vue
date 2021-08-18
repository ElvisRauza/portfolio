<template>
  <router-link :to="'/portfolio/' + item.slug">
    <div class="portfolio-item__image-wrap">
      <img
        class="portfolio-item__image"
        :src="item.image.src"
        :alt="item.image.alt"
      />
    </div>
    <div class="portfolio-item__overlay">
      <h2 class="portfolio-item__title">
        {{ item.title }}
      </h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.portfolio-item {
  position: relative;
  display: block;
  overflow: hidden;

  &__image-wrap {
    width: 100%;
    height: 400px;

    transition: all 1s ease-out;

    .portfolio-item:hover & {
      transform: scale(1.1);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    opacity: 0;
    visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(black, 0.5);
    transition: all 0.3s;

    .portfolio-item:hover & {
      opacity: 1;
      visibility: visible;
    }
  }

  &__title {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
