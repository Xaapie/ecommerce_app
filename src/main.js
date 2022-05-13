//initialise root component into a element.
//responsible for setting up plugins and 3rd party components to use in the app
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

store.dispatch("fetchUser").then(() => {
  createApp(App).use(store).use(router).use(Antd).mount("#app");
});
