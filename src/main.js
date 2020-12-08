import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import globalComponents from "@/components/Shared/globalComponents.js";
import "@/firebase/index";
Vue.config.productionTip = false;
import firebase from "firebase/app";
import('@/assets/css/tailwind.css')

globalComponents.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  // eslint-disable-next-line no-console
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});