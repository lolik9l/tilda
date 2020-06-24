import Vue from "vue";
import Vuex from "vuex";
import page from "./modules/page";
import records from "./modules/records";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    page,
    records
  }
});
