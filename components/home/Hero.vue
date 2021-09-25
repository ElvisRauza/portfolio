<template>
  <section class="hero full">
    <div class="hero__bg">
      <img class="hero__bg-img" src="/images/city-night.jpg" alt="" />
    </div>
    <div class="container">
      <div class="hero__inner">
        <h1
          v-observe-visibility="{
            callback: handleTitleAnimation,
            once: true,
            throttle: 300
          }"
          class="hero__title"
        >
          Hello, I'm <span>Elvis Rauza</span>. <br />
          I'm a full-stack web developer.
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
  methods: {
    handleTitleAnimation(isVisible, e) {
      if (isVisible) {
        const el = e.target
        el.classList.add('animated')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    mix-blend-mode: overlay;
  }

  &__inner {
    position: relative;
    z-index: 1;
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
