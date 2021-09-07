<template>
  <section class="hero full">
    <div class="container">
      <div class="hero__inner">
        <h1
          v-observe-visibility="{
            callback: handleTitleAnimation,
            once: true,
            throttle: 300,
          }"
          class="hero__title"
        >
          Hello, I'm <span>Elvis Rauza</span>. <br />
          I'm a full-stack developer.
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  methods: {
    handleTitleAnimation(isVisible, e) {
      if (isVisible) {
        let el = e.target;
        el.classList.add("animated");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &__inner {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    text-align: center;

    // animate
    opacity: 0;
    margin: -60px 0 0;
    transition: opacity 0.75s ease-in, margin 1s linear;

    &.animated {
      margin-top: 0;
      opacity: 1;

      span {
        color: $blue;
      }
    }

    span {
      transition: all 0.5s;
      transition-delay: 1s;
    }
  }
}
</style>
