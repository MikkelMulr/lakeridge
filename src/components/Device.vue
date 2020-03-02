<template>
	<main class="Device">
		<header>
			<img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
		</header>
		<section class="device-inner">
			<div class="marvel-device iphone-x">
				<div class="notch">
					<div class="camera"></div>
					<div class="speaker"></div>
				</div>
				<div class="top-bar"></div>
				<div class="sleep"></div>
				<div class="bottom-bar"></div>
				<div class="volume"></div>
				<div class="overflow">
					<div class="shadow shadow--tr"></div>
					<div class="shadow shadow--tl"></div>
					<div class="shadow shadow--br"></div>
					<div class="shadow shadow--bl"></div>
				</div>
				<div class="inner-shadow"></div>
				<div class="screen">
					<!-- Content goes here -->
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: "Device"
		// props: {
		// 	mythData: Object,
		// 	nextEvent: Function
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/styles/devices.min.css";
	.device-inner {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: -1vh;
	}
	.logo {
		padding: 1rem 0 0 3rem;
		display: flex;
		flex-direction: row;
	}
	.screen {
		padding-top: 5vh;
	}
</style>
