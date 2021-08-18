<template>
  <section class="portfolio">
    <div class="container">
      <div class="flexbox flexbox--full">
        <div
          v-for="item in items"
          :key="item.id"
          class="col col-50 col-s-full"
        >
          <PortfolioItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioItem from "@/components/home/PortfolioItem.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          slug: "project",
          title: "Project",
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
        },
        {
          id: 2,
          slug: "project-1",
          title: "Project",
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
        },
        {
          id: 3,
          slug: "project-2",
          title: "Project",
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
        },
        {
          id: 4,
          slug: "project-3",
          title: "Project",
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
