import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("../views/HomeView.vue"),
  //   meta: { title: "Контакты | Юридическая фирма LANDMARK" },
  // },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Главная | VUE TS BLOG" } as { title: string },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { title: "Логин | VUE TS BLOG" } as { title: string },
  },
];

const router = createRouter({
  history: createWebHashHistory("/vue-blog/"),
  routes,
});

router.beforeEach((to, from, next) => {
  // Проверяем, что to.meta.title является строкой
  if (typeof to.meta.title === "string") {
    document.title = to.meta.title;
  } else {
    document.title = "VUE TS BLOG";
  }
  next();
});

export default router;
