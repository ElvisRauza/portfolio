import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SinglePortfolio from "@/views/SinglePortfolio.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/portfolio/:slug",
    component: SinglePortfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
