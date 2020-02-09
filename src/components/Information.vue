<template>
	<main id="Information">
		<header>
			<img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
		</header>
		<section class="device">
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
					<section class="speech-bubble">
						<h2>{{mythData.myth_title}}</h2>
					</section>
					<button class="Information--nextBtn" v-on:click="nextEvent">Next</button>
					<router-link :to="{name: 'Home', props: { } }">Exit Game</router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: "Information",
		props: {
			mythData: Object,
			nextEvent: { type: Function }
		},
		components: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/styles/devices.min.css";
	.device {
		width: 100vw;
		/* height: 100vh; */
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
		padding: 5vh;
	}
	.speech-bubble {
		position: relative;
		background: #27aae1;
		border-radius: 0.8rem;
		padding: 3rem;
		font-size: 2rem;
		text-align: left;
		line-height: 3.15rem;
	}

	.speech-bubble:after {
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		width: 0;
		height: 0;
		border: 7rem solid transparent;
		border-left-color: #27aae1;
		border-right: 0;
		border-top: 0;
		margin-top: -5rem;
		margin-right: -2em;
	}
</style>
