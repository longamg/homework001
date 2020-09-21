<template>
	<div>
		{{ position }}
	</div>
</template>

<script>
	import { useKeyboardMove } from "../use/useKeyboardMove";
	export default {
		setup() {
			const position = useKeyboardMove();
			return {
				position,
			};
		},
	};
</script>

<style scoped>
</style>
