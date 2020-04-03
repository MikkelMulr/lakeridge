// This component is used to display the myth (chat bubbles) to the user while in game mode
<template>
	<section class="container">
		<main class="Questions">
			<section class="device">
				<div class="marvel-device iphone-x">
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
					<div class="nextBtn" v-on:click="nextEvent">{{buttons.true}}</div>
					<div class="nextBtn" v-on:click="nextEvent">{{buttons.false}}</div>
				</div>
			</section>
		</main>
	</section>
</template>

<script>
	export default {
		name: "Question",
		props: {
			mythData: Object,
			nextEvent: Function,
			buttons: Object
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/styles/devices.min.css";

	.container {
		background: #f5f5f5;
		overflow: hidden;
		border-radius: 10px;
	}
	.Questions {
		height: 82vh;
		width: 95vw;
		padding: 80px 0;
		position: relative;
		display: flex;
		justify-content: flex-end;
	}

	.device {
		position: absolute;
		left: 50%;
		width: 50%;
		height: auto;
		max-height: 80vh;
		padding-top: 70px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		transform-origin: center;
		transform: scale(1.3) translateX(-40%);
		animation: shrink 1s ease-in-out forwards 2.4s;
	}

	@keyframes shrink {
		to {
			left: 0%;
			transform: scale(1.3) translateX(0%);
		}
	}

	.screen {
		padding: 20px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.screen::-webkit-scrollbar {
		display: none;
	}

	p {
		width: 70%;
		padding: 10px 20px;
		margin: 10px 0;
		height: auto;
		border-radius: 20px;
		font-size: 2rem;
		opacity: 0;
		font-weight: 600;
		text-align: left;
		transform: translateY(50rem) scale(0.5);
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
		animation: pop 0.6s ease-out forwards;
	}

	.bubble:nth-child(even) p {
		margin-left: auto;
		background-color: #27aae1;
		color: #fff;
	}

	.bubble:nth-child(odd) p {
		background-color: #c7c8ca;
		color: #383838;
	}

	.bubble:nth-of-type(1) p {
		animation-delay:  0s;
	}
	
	.bubble:nth-of-type(2) p {
		animation-delay:  0.9s;
	}
	
	.bubble:nth-of-type(3) p {
		animation-delay:  1.8s;
	}

	@keyframes pop {
		0% {
			transform: translateY(50rem) scale(0.5);
			opacity: 0;
		}
		100% {
			transform: translateY(0) scale(1);
			opacity: 1;
		}
	}

	.question-side {
		width: 50%;
		opacity: 0;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: show 1s ease-in-out forwards 3s;
	}

	@keyframes show {
		to {
			opacity: 1;
		}
	}

	h1 {
		font-size: 5rem;
		padding: 0 50px;
		font-weight: 200;
		font-family: 'Raleway';
	}

	h2 {
		font-size: 3rem;
		font-weight: 600;
		font-style: italic;
		margin: 20px auto;
		padding: 10px 40px;
		border-left: 10px solid #383838;
		box-shadow: inset 0px 0 0 rgba(0, 0, 0, 0.05);
		animation: fillShadow 1s ease-out forwards 4s;
	}

	@keyframes fillShadow {
		to {
			box-shadow: inset 1000px 0 0 rgba(0, 0, 0, 0.05);
		}
	}

	.nextBtn {
		width: 45%;
		padding: 10px 20px;
		border-radius: 20px;
		border: 5px solid #27AAE1;
		color: #383838;
		background-color: #fff;
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
		font-size: 2.2rem;
		font-weight: 600;
		cursor: pointer;
		align-self: stretch;
	}

	.choices {
		padding: 10px 60px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	@media only screen and (max-width: 64em) {
		.Questions {
			padding: 0;
			flex-direction: column;
		}

		.device {
			position: absolute;
			top: -40px;
			left: 0%;
			width: 100%;
			animation: none;
			transform: scale(1) translateX(0%);
		}

		p {
			font-size: 16px;
		}

		.question-side { 
			width: 100%;
			height: 40%;
			background: #f1f1f1;
			animation: show 1s ease-in-out forwards 2.4s;
		}


		h1 {
			font-size: 24px;
		}

		h2 {
			font-size: 20px;
		}

		.nextBtn {
			font-size: 16px;
		}
	}

	@media only screen and (max-width: 40em) {
		.Questions {
			min-height: 120vh;
		}

		p {
			font-size: 14px;
		}

		.question-side {
			height: 40%;
		}

		h1 {
			font-size: 20px;
		}

		h2 {
			font-size: 16px;
		}

		.choices {
			padding: 10px 10px;
		}

		.nextBtn {
			font-size: 14px;
			width: 47%;
			padding: 10px 10px;
		}
	}
</style>
