// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as firebase from "firebase/app";

import { firestorePlugin } from "vuefire";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(firestorePlugin);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "course-fire-app-6bb3e.firebaseapp.com",
  projectId: "course-fire-app-6bb3e",
  storageBucket: "course-fire-app-6bb3e.appspot.com",
  messagingSenderId: "395202438513",
  appId: "1:395202438513:web:7b0e4cd1c6b8e739ff82d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export the firebase connection
export const db = firebase.firestore();
