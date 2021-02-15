import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import dashBoard from "../views/dashboard.vue";
import signIn from "../views/signIn.vue";
import signUp from "../views/signUp.vue";
import store from "@/store";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashBoard",
    component: dashBoard,
    beforeEnter: () => {
      if (!store.getters["authModule/authenticated"]) {
        router.replace({
          name: "signin",
        });
      }
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: signIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: signUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
