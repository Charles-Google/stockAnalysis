//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from "vue-router";
// import { constantRoute } from "./router";
//创建路由器
const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/views/homePage.vue"),
      name: "home",
    },
    {
      path: "/details",
      component: () => import("@/views/stockDetails.vue"),
      name: "details",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home",
      name: "Any",
    },
  ],
});
export default router;
