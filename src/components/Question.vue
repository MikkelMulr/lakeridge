// This component is used to display the myth (chat bubbles) to the user while in game mode
<template>
	<main class="Question">
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
					<div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
						<p>{{item}}</p>
					</div>
				</div>
			</div>
		</section>
		<section class="question-side">
			<h1>{{mythData.myth_title}}</h1>
			<h2>If you were in this situation, how would you respond?</h2>
			<div class="choices">
				<div class="nextBtn" v-on:click="nextEvent">Fact</div>
				<div class="nextBtn" v-on:click="nextEvent">Myth</div>
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

	.Question {
		height: 90vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
	}

	.device {
		width: 50vw;
		height: 100%;
		max-height: 90vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		animation: appear 0.8s ease-out;
		overflow: hidden;
	}

	.screen {
		padding: 5vh;
		overflow: scroll;
	}

	.screen::-webkit-scrollbar {
		display: none;
	}

	p {
		padding: 1rem;
		color: #fff;
		/* width: 70%; */
		height: auto;
		border-radius: 2.5rem;
		padding: 3rem;
		margin: 1rem 0;
		font-size: 2.5rem;
		text-align: left;
		line-height: 1.5em;
	}

	.bubble:nth-child(even) p {
		background-color: #27aae1;
	}

	.bubble:nth-child(odd) p {
		background-color: #c7c8ca;
	}

	.nextBtn {
		font-size: 2rem;
		padding: 2rem;
		height: 60px;
		width: 40%;
		color: #fff;
		background-color: rgb(92, 145, 161);
		cursor: pointer;
		border-radius: 2.5rem;
	}

	.choices {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		justify-self: center;
		padding-top: 12em;
	}

	@keyframes appear {
		0% {
			transform: translateY(500px);
		}

		100% {
			transform: translateY(10rem);
		}
	}

	.question-side {
		width: 50vw;
		height: 100vh;
		border-left: 0.25rem solid #9f9f9f;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		/* align-items: center; */
	}
	h1 {
		/* align-items: flex-start; */
		font-size: 5rem;
		font-weight: 500;
		text-align: left;
	}
	h2 {
		/* align-items: center; */
		font-size: 3rem;
		font-weight: 300;
		text-align: left;

		/* margin: 1rem 0; */
	}
</style>
