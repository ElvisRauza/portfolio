<template>
  <section class="about-me">
    <div class="container container--medium">
      <h2 class="block-title">About me</h2>
      <div class="flexbox">
        <div class="col col-70">
          <p>
            I have experiance developing WordPress sites from One-Pagers to
            fully-fledged WooCommerce stores.
          </p>
          <p>Some of technologies I work with:</p>
          <ul class="tech">
            <li v-for="(skill, i) in skills" :key="i" class="tech__item">
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
    handleBarAnimation(isVisible, entry) {
      const el = entry.target
      if (isVisible) {
        el.style.width = el.dataset.width + '%'
      } else {
        el.style.width = 0
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
