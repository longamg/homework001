<template>
	<div>
		<h1>这里是Login组件</h1>
		<button @click="login">Login</button>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				msg: "",
			};
		},
		methods: {
			login() {
				this.$router.push({
					name: "Home",
				});
			},
		},
	};
</script>

<style scoped>
</style>