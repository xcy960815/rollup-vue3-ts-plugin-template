
import { createApp } from "vue";

import App from "./App.vue";
import RollupVue3TsPluginTemplate from "rollup-vue3-ts-plugin-template"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(RollupVue3TsPluginTemplate, { prefix: "我是配置项里面的前缀" })
app.mount("#app");