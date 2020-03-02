// This component serves 2 purposes:
// 1 - display Myth "facts" after a user (while in game mode) has clicked their "answer" to a myth scenario
// 2 - display Myth information respective to the myth card that is selected while in browse mode
<template>
	<div id="Information" v-if="viewType == 'browse'">

		<!-- container for Information -->
		<div class="infoCont">
			<h2>{{mythData.myth_title}}</h2>
			<p>{{mythData.fact_title}}</p>
			<div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
				<p class="fact">{{item}}</p>
			</div>
			<div class="Information--nextBtn" v-on:click="returnTo">Back to Myths</div>
		</div>

		<!-- container for img -->
		<div class="imgCont">

		</div>
	</div>
	<div id="Information" v-else>

		<!-- container for Information -->
		<div class="infoCont"><h2>{{mythData.myth_title}}</h2>
			<p>{{mythData.fact_title}}</p>
			<div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
				<p class="fact">{{item}}</p>
			</div>
			<div class="Information--nextBtn" v-on:click="nextEvent">Next</div>
		</div>

		<!-- container for img -->
		<div class="imgCont">
			<img src="../assets/images/ill.svg" alt="ill">

		</div>

	</div>

</template>

<script>
	// <router-link :to="{name: 'Home', props: { } }">Exit Game</router-link>

	export default {
		name: "Information",
		props: {
			mythData: Object,
			returnTo: { type: Function },
			nextEvent: { type: Function },
			viewType: String
		},
		components: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	/* Import fonts */
	@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
	
	@import "../assets/styles/devices.min.css";

	/* Information Container */
	#Information {
		font-family: 'Open Sans';
		margin-top: 30px;
		background-color: #fff;
		display: flex;
	}
	
	.facts {
		/* height: 50px; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.fact {
		width: 100%;
		height: 100%;
		background-color: #fff;
		color: #000;
	}

	/* Information Container styles */
	.infoCont {
		margin-top: 0px;
		width: 50%;
		padding: 0px 50px 50px 50px;
	}

	.infoCont h2 {
		font-size: 50px;
		font-weight: 300;
		text-align: left;
		margin-bottom: 30px;
	}

	.infoCont p {
		font-size: 20px;
		margin: 10px 0px 10px 0px;
		text-align: left;
		line-height: 30px;
	}


	/* Image Container Styles */
	.imgCont {
		margin-top: 0px;
		width: 50%;
		padding: 0px 50px;
	}

	.imgCont img {
		width: 100%;
	}
</style>
