<template>
	<container>
		<sprite :texture="enemyImg"></sprite>
	</container>
</template>

<script setup>
	import enemyImg from "../assets/enemy.png";

	export default {
		name: "EnemyPlane",
	};

	export { enemyImg };
</script>

<style scoped></style>
