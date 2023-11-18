import { createApp } from "vue";
import App from "@/App.vue";
// svg插件需要配置代码
import "virtual:svg-icons-register";
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from "@/components/index";

// import "element-plus/theme-chalk/el-notification.css";
// import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import router from "./router";
// import pinia from "./store";
// import "./permission";
// import { isHasButton } from "./directive/has";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
app.use(ElementPlus);
// isHasButton(app);
app.use(globalComponent);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
// app.use(pinia);
app.mount("#app");
