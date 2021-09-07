<template>
  <section class="about-me bg-light">
    <div class="container container--large">
      <h2 class="block-title">
        About me
      </h2>
      <div class="flexbox">
        <div class="col col-50">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            placerat auctor semper. Vivamus sed est at ligula pellentesque
            vestibulum nec at nisl. Maecenas efficitur magna quis tortor
            facilisis, a pretium metus efficitur. Nulla dapibus faucibus
            porttitor. In massa sapien, pretium feugiat risus eu, pharetra
            consequat leo. Ut vestibulum, massa eget rutrum ornare, nibh sapien
            dapibus est, sed ultricies est dolor in neque. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Fusce eu libero sed velit cursus tincidunt non non felis.
            Nunc convallis commodo augue id bibendum. Phasellus placerat rhoncus
            nisl, eu fringilla neque laoreet ac. Donec mattis urna tortor, sed
            ornare tortor mattis sed. Sed tincidunt lectus lobortis dictum
            lacinia. Donec sed leo tortor. Proin eleifend viverra orci in
            placerat.
          </p>
        </div>
        <div class="col col-50">
          <div class="skills">
            <div
              v-for="(skill, i) in skills"
              :key="i"
              class="skill"
            >
              <p class="skill__label skill__label--left">
                {{ skill.label }}
              </p>
              <div
                v-observe-visibility="{
                  callback: handleBarAnimation,
                  once: true,
                  throttle: 100,
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
  name: "AboutMe",
  data() {
    return {
      skills: [
        {
          label: "HTML",
          progress: 95,
        },
        {
          label: "CSS",
          progress: 95,
        },
        {
          label: "JavaScript",
          progress: 80,
        },
        {
          label: "PHP",
          progress: 80,
        },
        {
          label: "Vue",
          progress: 65,
        },
      ],
    };
  },
  methods: {
    handleBarAnimation(isVisible, entry) {
      let el = entry.target;
      if (isVisible) {
        el.style.width = el.dataset.width + "%";
      } else {
        el.style.width = 0;
      }
    },
  },
};
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
