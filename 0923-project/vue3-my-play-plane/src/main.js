// import { createRenderer } from "vue";
import { getRootContaier } from "./game";
import { createApp } from "./runtime-canvas";
import App from "./App.vue";

// 根容器
// 根组件
createApp(App).mount(getRootContaier());
window.console.warn = () => { };