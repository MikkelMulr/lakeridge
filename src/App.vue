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
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Raleway:ital,wght@0,200;1,800;1,900&display=swap');

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
		min-height: 100vh;
		color: #383838;
		background: #fff;
		font-family: "Poppins", sans-serif;
		animation: change 1s forwards 10.5s;
	}

	@keyframes change {
		to {
			/* background: #00baff; */
		}
	}
</style>
