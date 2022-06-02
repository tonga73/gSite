import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

import LoginFormAuthenticate from "../components/LoginFormAuthenticate.vue";

import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    children: [
      {
        path: "",
        name: "login",
        component: LoginFormAuthenticate,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem("isLoggedIn"));
  if (
    to.name !== "login" &&
    JSON.parse(localStorage.getItem("isLoggedIn")) === null
  )
    next({ name: "login" });
  else next();
});

export default router;
