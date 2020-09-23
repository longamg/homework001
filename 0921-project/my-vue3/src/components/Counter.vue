<template>
	<div>
		<h1>{{ count }}</h1>
		<h1>{{ double }}</h1>
		<button @click="handleClick">count</button>
	</div>
</template>

<script>
	import { computed, ref, watch, watchEffect } from "vue";
	export default {
		props: ["count"],
		setup(props, context) {
			console.log(props, context);
			const count = ref(0);

			const handleClick = () => {
				count.value++;
			};

			const double = computed(() => {
				return count.value * 2;
			});

			watch(double, (newValue, oldValue) => {
				console.log(newValue);
				console.log(oldValue);
				console.log("watch");
			});

			watchEffect(() => {
				console.log(double.value);
			});

			return {
				handleClick,
				// count,
				double,
			};
		},
	};
</script>

<style scoped>
</style>
