import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
//全局注册icon组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 使用验证码组件
import MakeitCaptcha from "makeit-captcha";
import "makeit-captcha/dist/captcha.min.css";
app.use(MakeitCaptcha);

app.use(store).use(router).mount("#app");
