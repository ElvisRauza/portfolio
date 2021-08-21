import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      porfolio: [
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
  getters: {
    getPorfolio: (state) => (slug) => {
      return state.porfolio.find((item) => item.slug == slug);
    },
  },
});

export default store;
