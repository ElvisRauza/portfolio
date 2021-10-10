<template>
  <section class="about-me">
    <div class="container container--medium">
      <h2
        v-observe-visibility="{
          callback: handleAnimation,
          once: true,
          throttle: 300
        }"
        class="block-title animate animate--fade-in"
      >
        About me
      </h2>
      <div class="flexbox">
        <div class="col col-70 col-s-full">
          <div
            v-observe-visibility="{
              callback: handleAnimation,
              once: true,
              throttle: 500
            }"
            class="content animate animate--fade-in"
          >
            <p>
              I have experiance developing WordPress sites from One-Pagers to
              fully-fledged WooCommerce stores.
            </p>
            <p>Some of technologies I work with:</p>
          </div>
          <ul class="tech">
            <li
              v-for="(skill, i) in skills"
              :key="i"
              v-observe-visibility="{
                callback: handleAnimation,
                once: true,
                throttle: 600
              }"
              class="tech__item"
            >
              <p class="tech__item-label">{{ skill.label }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      skills: []
    }
  },
  async fetch() {
    const home = await this.$content('home').fetch()
    this.skills = home.skills
  },
  methods: {
    handleAnimation(isVisible, entry) {
      const el = entry.target
      if (isVisible) {
        el.classList.add('animated')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tech {
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;

  &__item {
    opacity: 0;
    margin: 0 5px;

    display: flex;
    align-items: center;
    transition: opacity 0.75s ease-in;

    &::before {
      content: '';
      display: block;
      width: 7px;
      height: 2px;
      margin-right: 3px;
      background-color: $main-color;
    }

    &.animated {
      opacity: 1;
    }
  }

  &__item-label {
    font-size: 1.4rem;
    margin: 0;
  }
}
</style>
