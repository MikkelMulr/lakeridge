// This component is used to display the myth (chat bubbles) to the user while in game mode
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
					<div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
						<p>{{item}}</p>
					</div>
					<div class="choices">
						<div class="nextBtn" v-on:click="nextEvent">Fact</div>
						<div class="nextBtn" v-on:click="nextEvent">Myth</div>
					</div>

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
	//   <div class="Question">
	//     <div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
	//       <p>{{item}}</p>
	//     </div>
	//     <div class="choices">
	//       <div class="nextBtn" v-on:click="nextEvent">Fact</div>
	//       <div class="nextBtn" v-on:click="nextEvent">Myth</div>
	//     </div>
	//   </div>
	// </template>

	// <script>
	// export default {
	//   name: "Question",
	//   props: {
	//     mythData: Object,
	//     nextEvent: Function,
	//     testData: Object
	//   }
	// };
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
		animation: appear 0.8s ease-out;
	}
	.logo {
		padding: 0.5rem 0 0 3rem;
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
	/* .Question {
			width: 25vw;
			height: 500px;
			background: #111;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			animation: appear 0.8s ease-out;
		} */

	p {
		padding: 1rem;
		color: #fff;
		width: 70%;
		height: auto;
	}

	.bubble:nth-child(even) p {
		background-color: rgb(92, 145, 161);
	}

	.bubble:nth-child(odd) p {
		background-color: #aaa;
	}

	.nextBtn {
		font-size: 2rem;
		padding: 2rem;
		height: 60px;
		width: 40%;
		color: #fff;
		background-color: rgb(92, 145, 161);
		cursor: pointer;
	}

	.choices {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	@keyframes appear {
		0% {
			transform: translateY(500px);
		}

		100% {
			transform: translateY(10rem);
		}
	}
</style>
