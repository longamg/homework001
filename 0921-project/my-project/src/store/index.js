import Vue from 'vue';
import Vuex from 'vuex';
import { fetchLogin } from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem("token") || "",
    },
    mutations: {
        login(state, payload) {
            state.token = payload.token;
            // 持久化保存 token
            // 方便下次获取
            localStorage.setItem("token", payload.token);
        },

        logout(state) {
            state.token = "";
            localStorage.removeItem("token");
        },
    },
    actions: {
        login({ commit }, payload) {
            // 异步的
            // action  支持返回 promise
            const { username, password } = payload;
            return fetchLogin({ username, password }).then((res) => {
                commit("login", {
                    token: res.data.data.token,
                });
            });
        },
    },
    modules: {
    }
})
