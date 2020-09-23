// http
import axios from "axios";
import store from "../store";
import router from "../router";
import Vue from "vue";

axios.defaults.timeout = 5000;
// 设置 baseurl
// 请求拦截器
axios.interceptors.request.use((config) => {
	if (store.state.token) {
		// 设置 authorization 符合 koa-jwt 检测规则的格式
		config.headers.authorization = "Bearer " + store.state.token;
	}

	return config;
});

// 响应拦截器
axios.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		const { response } = err;
		switch (response.status) {
			case 401:
				// Vue.prototype
				// elementUI ——> Vue.prototype
				// js 的基础
				Vue.prototype
					.$confirm("登录过期，请重新登录", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						router.replace({
							name: "login",
						});
					})
					.catch(() => {
						// 取消逻辑
					});
				break;
			default:
				break;
		}
	}
);

export default axios;
