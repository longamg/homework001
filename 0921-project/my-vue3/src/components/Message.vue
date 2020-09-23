<template>
	<div>
		<h1>{{ info }}</h1>
		<h2>{{ message }}</h2>
	</div>
</template>

<script>
	import { onBeforeMount, onMounted, reactive, ref } from "vue";

	// import { test } from "../use/index";

	export default {
		setup() {
			// 组件初始化的如入口
			// composition api 入口

			// 接收object array
			// 引用类型
			const info = reactive({
				message: "hello",
			});

			const message = ref("ref hello");

			console.log(info);
			console.log(message);

			onMounted(() => {
				console.log("onMounted");
			});

			onBeforeMount(() => {
				console.log("onBeforeMount");
			});

			return {
				info,
				message,
			};
		},
	};
</script>

<style scoped>
</style>
