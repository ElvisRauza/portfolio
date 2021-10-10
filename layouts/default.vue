<template>
  <div class="main">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <Copyright />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
