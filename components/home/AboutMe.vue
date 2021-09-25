<template>
  <section class="about-me bg-light">
    <div class="container container--medium">
      <h2 class="block-title">About</h2>
      <div class="flexbox">
        <div class="col col-50">
          <p>Who am I?</p>
          <p>
            I'm web developer from Lativia. I have experiance developing
            WordPress sites from One-Pagers to fully-fledged WooCommerce stores.
          </p>
          <p>
            I have experiance in SysOps, that includes configured LEMP server
            stack, working with Nginx, PHP and MySQL configs, Certbot SSL
            certificate configuration and much more.
          </p>
        </div>
        <div class="col col-50">
          <div class="skills">
            <div v-for="(skill, i) in skills" :key="i" class="skill">
              <p class="skill__label skill__label--left">
                {{ skill.label }}
              </p>
              <div
                v-observe-visibility="{
                  callback: handleBarAnimation,
                  once: true,
                  throttle: 100
                }"
                class="skill__bar"
                :data-width="skill.progress"
              >
                <p class="skill__label skill__label--right">
                  {{ skill.progress }}%
                </p>
              </div>
            </div>
          </div>
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
$bar-height: 30px;
$offset: 100px;
.about-me {
}
.skill {
  position: relative;
  padding-left: $offset;
  background-color: lighten($black, 5%);
  margin: 0 0 10px;

  &__label {
    position: absolute;
    top: 0;
    bottom: 0;

    font-size: 1.4rem;
    line-height: $bar-height;
    margin: 0;
    text-align: center;

    &--left {
      left: 0;
      width: $offset;
      background-color: darken($blue, 10%);
    }

    &--right {
      right: 0;
      width: 60px;
    }
  }

  &__bar {
    position: relative;
    width: 10%;
    height: $bar-height;
    background-color: $blue;
    transition: all 1s ease-in;
  }
}
</style>
