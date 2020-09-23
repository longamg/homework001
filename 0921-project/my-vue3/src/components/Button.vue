<template>
	<div>
		<h1>{{ msg }}</h1>
		<div></div>
	</div>
</template>

<script>
	import { test } from "../use/index";

	export default {
		setup() {
			// 组件初始化的如入口
			// composition api 入口
			test();
		},
	};
</script>

<style scoped>
</style>
