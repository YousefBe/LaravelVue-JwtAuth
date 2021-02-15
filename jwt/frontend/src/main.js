import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("@/store/subscriber.js");

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// mount the app only when the auth check is done
store.dispatch("authModule/attempt", localStorage.getItem("token")).then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
});
