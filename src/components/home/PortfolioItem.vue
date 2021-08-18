<template>
  <router-link
    class="portfolio-item"
    :to="'/portfolio/' + item.slug"
  >
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
      transform: scale(1.05);
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

    padding: 10px;
    display: flex;
    align-items: flex-end;

    background-color: rgba($gray, 0.3);
    transition: all 0.2s;

    .portfolio-item:hover & {
      opacity: 1;
      visibility: visible;
    }
  }

  &__title {
    opacity: 0.8;

    color: white;
    font-size: 20px;
    margin: 0;

    transition: all 0.3s ease-out;
    transform: translateY(50px);

    .portfolio-item:hover & {
      transform: translateY(0);
    }
  }
}
</style>
