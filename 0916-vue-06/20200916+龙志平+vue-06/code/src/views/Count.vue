<template>
	<div>
		<h1>This is an Count page</h1>
		<div>计数器：{{ this.$store.state.count }}</div>
		<button @click="addCount">增加</button>
		<button @click="reduceCount">减少</button>
	</div>
</template>

<script>
	export default {
		name: "Count",
		methods: {
			addCount() {
				this.$store.commit("addCount");
			},
			reduceCount() {
				this.$store.commit("reduceCount");
			},
		},
	};
</script>
