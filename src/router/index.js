import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/signupView.vue"),
    },
    {
      path: "/todolist",
      name: "todolist",
      component: () => import("../views/TodoListView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要 token
  if (to.name === "todolist") {
    const token = sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
