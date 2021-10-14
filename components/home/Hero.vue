<template>
  <section class="hero full">
    <div class="hero__bg"></div>
    <div class="container container--medium">
      <div class="hero__inner">
        <h1
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 300
          }"
          class="hero__title animate animate--fade-in"
        >
          Hi, my <br />
          name is <span>{{ data.name }}</span
          >. <br />
        </h1>
        <p
          v-observe-visibility="{
            callback: handleAnimation,
            once: true,
            throttle: 400
          }"
          class="hero__desc animate animate--fade-in"
        >
          I'm a <b>{{ data.profession }}</b
          ><br />
          from {{ data.location }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
  props: {
    data: {
      type: Object,
      required: true
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
.hero {
  position: relative;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  // &__bg-img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   opacity: 0.5;
  //   mix-blend-mode: overlay;
  // }

  &__inner {
    position: relative;
    z-index: 1;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    margin: 0;
    font-size: 7rem;
    line-height: 1;

    span {
      color: $main-color;
    }

    span {
      transition: all 0.5s;
      transition-delay: 1s;
    }
  }

  &__desc {
    margin: 30px 0 0;
    font-size: 3rem;
  }
}
</style>
