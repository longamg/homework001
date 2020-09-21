<template>
	<div>
		{{ position }}
	</div>
</template>

<script>
	import { useMousePosition } from "../use/useMousePosition";
	export default {
		setup() {
			const position = useMousePosition();
			return {
				position,
			};
		},
	};
</script>

<style scoped>
</style>
