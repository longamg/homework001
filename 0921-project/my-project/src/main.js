import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/photo.css";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from "element-ui";

Vue.config.productionTip = false;

// use
Vue.use(ElementUI);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');