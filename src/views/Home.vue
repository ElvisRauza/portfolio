<template>
  <HomeHero />
  <HomeAboutMe />
  <HomePortfolios />
</template>

<script>
import HomeHero from "@/components/home/Hero";
import HomeAboutMe from "@/components/home/AboutMe";
import HomePortfolios from "@/components/home/Portfolios";

export default {
  name: "Home",
  components: {
    HomeHero,
    HomeAboutMe,
    HomePortfolios,
  },
};
</script>

<style></style>
