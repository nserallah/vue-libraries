import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import VueFormWizard from 'vue-form-wizard'


Vue.use(VueFormWizard)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
