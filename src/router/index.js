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
  ],
});
router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要 token
  if (to.name === "todolist") {
    const token = sessionStorage.getItem("token"); // 从 sessionStorage 获取 token
    if (token) {
      // 如果有 token，则继续导航
      next({name:"todolist"});
    } else {
      // 如果没有 token，则重定向到主页或登录页面
      next({ name: "home" });
    }
  } else {
    // 对其他路由不做拦截，直接继续导航
    next();
  }
});

export default router;
