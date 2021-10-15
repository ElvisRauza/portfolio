<template>
  <div
    v-observe-visibility="{
      callback: handleAnimation,
      once: true,
      throttle: 300
    }"
    class="portfolio-item animate animate--fade-in"
  >
    <div class="portfolio-item__picture">
      <a
        class="portfolio-item__overlay"
        :href="item.websiteUrl"
        target="_blank"
        rel="nofollow noreferrer"
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
        <a :href="item.websiteUrl" target="_blank" rel="nofollow noreferrer">{{
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
          rel="nofollow noreferrer"
          aria-label="Visit website"
        >
          <inline-svg src="/images/external.svg" width="24" height="24" />
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
    handleAnimation(isVisible, e) {
      if (isVisible) {
        const el = e.target
        el.classList.add('animated')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  @include resp-max('s') {
    margin-bottom: 60px;
  }
  @include resp-min('s') {
    display: flex;
    align-items: center;
    margin: 0 -15px 100px;
  }

  &:nth-child(even) {
    @include resp-min('s') {
      flex-direction: row-reverse;
    }
  }
  &:nth-child(odd) {
    @include resp-min('s') {
      text-align: right;
    }
  }

  &__picture {
    @include resp-max('s') {
      margin-bottom: 15px;
    }
    @include resp-min('s') {
      width: 60%;
      padding: 15px;
    }
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
      transition: all 0.33s;
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
    @include resp-min('s') {
      width: 40%;
      padding: 15px;
    }
  }

  &__title {
    margin: 0 0 15px;
  }

  &__desc-wrap {
    @include resp-min('s') {
      padding-left: 25px;
    }
    position: relative;
    z-index: 1;

    padding: 15px;
    border-radius: 3px;
    background-color: lighten($bg-color, 5%);
    box-shadow: 0 0 5px 0 rgba($black, 0.1);

    .portfolio-item:nth-child(odd) & {
      @include resp-min('s') {
        margin-left: -80px;
      }
    }
    .portfolio-item:nth-child(even) & {
      @include resp-min('s') {
        margin-right: -80px;
      }
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
    margin: 5px -5px 0;

    .portfolio-item:nth-child(odd) & {
      @include resp-min('s') {
        justify-content: flex-end;
      }
    }
  }

  &__tech {
    margin: 10px 5px 0;
  }

  &__tech-item {
    font-size: 1.4rem;
    padding: 3px 7px;
    border-radius: 3px;
    background-color: rgba($black, 0.5);
  }

  &__visit {
    margin-top: 15px;
  }
}
</style>
