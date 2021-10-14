<template>
  <section class="about-me">
    <div class="container container--medium">
      <h2
        v-observe-visibility="{
          callback: handleAnimation,
          once: true,
          throttle: 100
        }"
        class="block-title animate animate--fade-in"
      >
        {{ data.title }}
      </h2>
      <div class="flexbox">
        <div class="col col-70 col-s-full">
          <div
            v-observe-visibility="{
              callback: handleAnimation,
              once: true,
              throttle: 300
            }"
            class="content animate animate--fade-in"
          >
            <p>{{ data.content }}</p>
            <p>{{ data.skills.title }}</p>
          </div>
          <ul class="tech">
            <li
              v-for="(skill, i) in data.skills.items"
              :key="i"
              v-observe-visibility="{
                callback: handleAnimation,
                once: true,
                throttle: 500
              }"
              class="tech__item animate animate--fade-in"
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
  props: {
    data: {
      type: Object,
      required: true
    }
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
    margin: 0 5px;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 7px;
      height: 2px;
      margin-right: 3px;
      background-color: $main-color;
    }
  }

  &__item-label {
    font-size: 1.4rem;
    margin: 0;
  }
}
</style>
