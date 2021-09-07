import { createApp } from "vue";
import VueObserveVisibility from "vue-observe-visibility";
import router from "./router";
import store from "./store";
import App from "./App.vue";

const app = createApp(App);
app.use(VueObserveVisibility);
app.use(store);
app.use(router);
app.mount("#app");
