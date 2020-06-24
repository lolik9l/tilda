import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "materialize-css";
import MainLayout from "./components/layouts/Main";
import Workspace from "./components/layouts/Workspace";

Vue.config.productionTip = false;
Vue.component("main-layout", MainLayout);
Vue.component("workspace-layout", Workspace);
// eslint-disable-next-line
M.AutoInit();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
