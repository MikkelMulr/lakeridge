<template>
	<main class="Question">
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
						<h4>{{mythData.myth_title}}</h4>
					</section>
					<button class="true" v-on:click="nextEvent">True</button>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: "Question",
		props: {
			mythData: Object,
			nextEvent: Function
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/styles/devices.min.css";
	.device {
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
		padding: 5vh;
	}
	.speech-bubble {
		position: relative;
		background: #c7c8ca;
		border-radius: 0.8rem;
		padding: 3rem;
		font-size: 2rem;
		text-align: left;
		line-height: 2.15rem;
	}

	.speech-bubble:after {
		content: "";
		position: absolute;
		left: 0;
		top: 50%;
		width: 0;
		height: 0;
		border: 2rem solid transparent;
		border-right-color: #c7c8ca;
		border-left: 0;
		border-top: 0;
		margin-top: -4rem;
		margin-left: -1em;
	}
	.true {
		padding: 1rem 0 0 3rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
