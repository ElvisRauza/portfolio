<template>
  <div class="portfolio-item">
    <div>
      <h2>{{ item.title }}</h2>
      <p>{{ item.short_desc }}</p>
      <ul>
        <li v-for="(tech, i) in item.builtWith" :key="i">
          <div>{{ tech }}</div>
        </li>
      </ul>
    </div>
    <a :href="item.url" target="_blank" rel="nofollow">Visit website</a>
  </div>
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
    handlePortfolioAnimation(isVisible, entry) {
      const el = entry.target
      if (isVisible) {
        el.classList.add('portfolio-item--animate')
      } else {
        el.classList.remove('portfolio-item--animate')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  display: flex;
  align-items: center;
}
</style>
