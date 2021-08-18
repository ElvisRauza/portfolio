<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./static/Header.vue";
import Footer from "./static/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
