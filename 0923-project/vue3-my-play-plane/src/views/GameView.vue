<template>
	<container>
		<Map></Map>
		<EnemyPlane
			v-for="(enemy, index) in enemyPlanes"
			:key="index"
			:x="enemy.x"
			:y="enemy.y"
		></EnemyPlane>
	</container>
</template>

<script setup>
	import Map from "../components/Map";
	import EnemyPlane from "../components/EnemyPlane";
	import { useEnemyPlane } from "../game/core/EnemyPlane";

	export default {
		components: {
			Map,
			EnemyPlane,
		},
	};

	// 创建一个飞机数据
	// 创建敌军
	const { enemyPlanes } = useEnemyPlane();

	export { enemyPlanes };
</script>

<style scoped></style>
