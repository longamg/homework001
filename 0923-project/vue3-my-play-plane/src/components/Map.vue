<template>
	<container>
		<sprite :texture="mapImg" :y="mapY1"></sprite>
		<sprite :texture="mapImg" :y="mapY2"></sprite>
	</container>
</template>

<script setup>
	import { onMounted, onUnmounted, ref } from "vue";
	import { game } from "../game";
	import mapImg from "../assets/map.jpg";
	// export { default as mapImg } from "../assets/map.jpg";

	const viewHeight = 1080;
	const mapY1 = ref(0);
	const mapY2 = ref(-viewHeight);

	// 滚动
	const speed = 5;
	function handleTicker() {
		mapY1.value += speed;
		mapY2.value += speed;

		if (mapY1.value >= viewHeight) {
			mapY1.value = -viewHeight;
		}

		if (mapY2.value >= viewHeight) {
			mapY2.value = -viewHeight;
		}
	}
	onMounted(() => {
		game.ticker.add(handleTicker);
	});

	onUnmounted(() => {
		game.ticker.remove(handleTicker);
	});

	export { mapImg, mapY1, mapY2 };
</script>

<style scoped></style>
