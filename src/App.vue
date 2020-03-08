<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
	import Header from "./components/Header";

	export default {
		name: "app",
		components: {
			Header
		}
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	/* setting root font size */
	html {
		font-size: 62.5%;
	}
	#app {
		font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		/* color: #2c3e50; */
		color: #231f20;
		/* To be deleted */
		background: #c7c8ca;
		overflow-x: hidden;
	}
</style>
