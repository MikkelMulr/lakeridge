// This component serves 2 purposes:
// 1 - display Myth "facts" after a user (while in game mode) has clicked their "answer" to a myth scenario
// 2 - display Myth information respective to the myth card that is selected while in browse mode
<template>
	<div1 id="Information" v-if="viewType == 'browse'">
		<h2>{{mythData.myth_title}}</h2>
		<p>{{mythData.fact_title}}</p>
		<div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
			<p class="fact">{{item}}</p>
		</div>
		<div class="Information--nextBtn" v-on:click="returnTo">Back to Myths</div>
	</div1>
	<div id="Information" v-else>
		<h2>{{mythData.myth_title}}</h2>
		<p>{{mythData.fact_title}}</p>
		<div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
			<p class="fact">{{item}}</p>
		</div>
		<div class="Information--nextBtn" v-on:click="nextEvent">Next</div>
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
	@import "../assets/styles/devices.min.css";

	.facts {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.fact {
		width: 50%;
		height: auto;
		padding: 1rem;
		background-color: #ddd;
		color: #000;
	}
</style>
