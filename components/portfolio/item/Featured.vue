<template>
  <div class="portfolio-item">
    <div class="portfolio-item__picture">
      <a
        class="portfolio-item__overlay"
        :href="item.websiteUrl"
        target="_blank"
        rel="nofollow"
        aria-label="Visit website"
      >
        <img
          v-if="item.image"
          class="portfolio-item__image"
          width="570"
          height="320"
          :src="item.image.src"
          :alt="item.image.alt"
        />
      </a>
    </div>
    <div class="portfolio-item__main">
      <h2 class="portfolio-item__title">
        <a :href="item.websiteUrl" target="_blank" rel="nofollow">{{
          item.name
        }}</a>
      </h2>
      <div class="portfolio-item__desc-wrap">
        <p class="portfolio-item__desc">{{ item.short_desc }}</p>
      </div>
      <ul class="portfolio-item__techs">
        <li
          v-for="(tech, i) in item.builtWith"
          :key="i"
          class="portfolio-item__tech"
        >
          <span class="portfolio-item__tech-item">{{ tech }}</span>
        </li>
      </ul>
      <div class="portfolio-item__visit">
        <a
          class="btn"
          :href="item.websiteUrl"
          target="_blank"
          rel="nofollow"
          aria-label="Visit website"
        >
          <InlineSvg src="/images/external.svg" width="24" height="24" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItemFeatured',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    handlePortfolioAnimation(isVisible, entry) {
      const el = entry.target
      if (isVisible) {
        el.classList.add('portfolio-item--animate')
      } else {
        el.classList.remove('portfolio-item--animate')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  display: flex;
  align-items: center;
  margin: 0 -15px;
  margin-bottom: 100px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &:nth-child(odd) {
    text-align: right;
  }

  &__picture {
    width: 60%;
    padding: 15px;
  }

  &__overlay {
    position: relative;
    display: block;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($main-color, 0.4);
      transition: all 0.25s;
    }

    &:hover {
      &::after {
        background-color: transparent;
      }
    }
  }

  &__image {
    width: 100%;
    border-radius: 3px;
    filter: grayscale(100%) contrast(1) brightness(90%);

    transition: all 0.25s;

    .portfolio-item__overlay:hover & {
      filter: grayscale(0) contrast(1) brightness(1);
    }
  }

  &__main {
    width: 40%;
    padding: 15px;
  }

  &__title {
    margin: 0 0 15px;
  }

  &__desc-wrap {
    position: relative;
    z-index: 1;

    padding: 15px;
    padding-left: 25px;
    margin-bottom: 15px;
    border-radius: 3px;
    background-color: lighten($bg-color, 5%);
    box-shadow: 0 0 5px 0 rgba($black, 0.1);

    .portfolio-item:nth-child(odd) & {
      margin-left: -80px;
    }
    .portfolio-item:nth-child(even) & {
      margin-right: -80px;
    }
  }

  &__desc {
    font-size: 1.5rem;
  }

  &__techs {
    list-style: none;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;

    .portfolio-item:nth-child(odd) & {
      justify-content: flex-end;
    }
  }

  &__tech {
    margin: 0 5px;
  }

  &__tech-item {
    font-size: 1.4rem;
    padding: 3px 7px;
    border-radius: 3px;
    background-color: rgba($black, 0.1);
  }

  &__visit {
    margin-top: 15px;
  }
}
</style>
