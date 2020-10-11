<template>
	<container>
		<sprite :texture="planeImg"></sprite>
	</container>
</template>

<script setup>
	import planeImg from "../assets/plane.png";
	export default {
		name: "Plane",
	};

	export { planeImg };
</script>

<style scoped></style>
