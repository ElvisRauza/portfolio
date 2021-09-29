<template>
  <div>
    <HomeHero />
    <HomeAboutMe />
    <HomePortfolios />
    <HomeContact />
  </div>
</template>

<script>
export default {
  name: "Home",
  head: {
    title: 'Elvis Rauza',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Elvis Rauza is a web developer who specializes in building wordpress websites'
      }
    ],
  }
};
</script>

<style></style>
