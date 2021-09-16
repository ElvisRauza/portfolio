import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      porfolio: [
        {
          id: 1,
          slug: "owood",
          title: "Owood",
          content: "Website uses Wordpress. Catalog utilizes Vue.JS for faster product filtering.",
          image: {
            src: require("@/assets/owood-featured.jpg"),
            alt: "Owood",
          },
          builtWith: ["wordpress", "vue"],
          websiteUrl: "https://www.owood.lv/",
        },
        {
          id: 2,
          slug: "project-1",
          title: "Project",
          content: '',
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
          builtWith: ["wordpress"],
          websiteUrl: "https://www.caballero.lv/",
        },
        {
          id: 3,
          slug: "project-2",
          title: "Project",
          content: '',
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
          builtWith: ["wordpress"],
          websiteUrl: "https://www.caballero.lv/",
        },
        {
          id: 4,
          slug: "project-3",
          title: "Project",
          content: '',
          image: {
            src: require("@/assets/qiadYggIU5w.jpg"),
            alt: "",
          },
          builtWith: ["wordpress"],
          websiteUrl: "https://www.caballero.lv/",
        },
      ],
    };
  },
  getters: {
    getFeaturedPortfolios: (state) => () => {
      return state.porfolio.filter((item) => item.featured);
    },
    getPorfolio: (state) => (slug) => {
      return state.porfolio.find((item) => item.slug == slug);
    },
  },
});

export default store;
