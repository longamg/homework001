import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		name: "张三",
		age: 20,
		count: 0
	},
	mutations: {
		// 增加
		addCount() {
			this.state.count++;
		},
		// 减少
		reduceCount() {
			this.state.count--;
		}

	},
	actions: {
	},
	modules: {
	}
})
