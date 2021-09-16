<template>
  <h2>Built with</h2>
  <div class="built-with__tooltips">
    <div
      v-for="(tech, i) in item.builtWith"
      :key="i"
      class="built-with__tooltip"
    >
      <div class="tooltip">
        <img
          width="42"
          height="42"
          :src="getTechIcon(tech)"
          :alt="tech"
        />
        <span>{{ getTechName(tech) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuiltWith",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTechIcon(name) {
      return require(`@/assets/${name}.svg`);
    },
    getTechName(name) {
      let techs = {
        wordpress: "WordPress",
        vue: "Vue.JS",
      };

      return techs[name];
    },
  },
};
</script>

<style lang="scss" scoped>
.built-with {
  &__tooltips {
    display: flex;
  }

  &__tooltip {
    margin: 0 5px;
  }
}

.tooltip {
  position: relative;

  span {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;

    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;

    color: $white;
    border-radius: 3px;
    background-color: $blue;

    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.33s;
  }

  &:hover {
    span {
      opacity: 1;
      margin-top: 10px;
    }
  }
}
</style>
