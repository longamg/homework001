<template>
	<div id="app">
		<div class="logoutbtn">
			<el-button @click="handleLogout">logout</el-button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
		created() {},
		methods: {
			handleLogout() {
				this.$store.commit("logout");
				this.$router.push({
					name: "login",
				});
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.logoutbtn {
		float: right;
	}
</style>
