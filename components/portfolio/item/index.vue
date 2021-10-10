<template>
  <article
    v-observe-visibility="{
      callback: handleAnimation,
      once: true,
      throttle: 300
    }"
    class="portfolio-item"
  >
    <div class="flexbox flexbox--v-c">
      <div class="col col-10 col-s-25">
        <p class="portfolio-item__year">{{ item.year }}</p>
      </div>
      <div class="col col-30 col-s-50">
        <h2 class="portfolio-item__title">{{ item.name }}</h2>
      </div>
      <div class="col col-50 col-s-none">
        <ul class="portfolio-item__list">
          <li
            v-for="(tech, i) in item.builtWith"
            :key="i"
            class="portfolio-item__list-item"
          >
            <p class="portfolio-item__list-tech">{{ tech }}</p>
          </li>
        </ul>
      </div>
      <div class="col col-10 col-s-25">
        <a
          :href="item.url"
          target="_blank"
          rel="nofollow"
          aria-label="Visit website"
        >
          <InlineSvg src="/images/external.svg" width="24" height="24" />
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioItem',
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
    padding: 5px 15px;
  }
  @include resp-min('s') {
    padding: 5px 35px;
  }

  color: $slate;
  transition: all 0.25s;
  border-radius: 5px;

  opacity: 0;
  margin: -30px 0 10px;
  transition: opacity 0.75s ease-in, margin 1s linear;

  &.animated {
    opacity: 1;
    margin-top: 0;
  }

  &:hover {
    background-color: rgba($text-color, 0.1);
  }

  &__year {
    color: $main-color;
    font-weight: 700;
    margin: 0;
  }

  &__title {
    color: $text-color;
    font-size: 2rem;
    margin: 0 0 1rem;
    margin: 0;
  }

  &__list {
    list-style: none;
    padding: 0;

    display: flex;
    margin: 0 -5px;
    flex-wrap: wrap;
    align-items: center;
  }

  &__list-item {
    margin: 0 5px;

    &:last-child {
      .portfolio-item__list-tech::after {
        content: none;
      }
    }
  }

  &__list-tech {
    margin: 0;
    font-size: 1.4rem;

    &::after {
      content: '\2022';
      margin-left: 10px;
    }
  }
}
</style>
