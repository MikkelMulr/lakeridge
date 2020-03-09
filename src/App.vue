<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
	import Header from "./components/Header";
	import Footer from "./components/Footer";

	export default {
		name: "app",
		components: {
			Header,
			Footer
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

		background: #00baff;
		overflow-x: hidden;
	}
</style>
