<template>
	<div id="Home">
		<div>
			<h1>LAKERIDGE HEALTH</h1>
			<h2>MYTHS VS FACTS</h2>
		</div>
		<div>
			<router-link class="playButton button" :to="{name: 'GameBox', props: { } }">Play Game</router-link>
		</div>
		<br />
		<div>
			<router-link class="skipButton button" :to="{name: 'Browse', props: { } }">Browse Myths</router-link>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "Home",
		props: {},
		components: {},
		data() {
			return {
				myths: null
			};
		},
		created() {
			axios.get("./data.json").then(response => (this.myths = response));
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.playButton {
		color: #ffffff;
		background: #fa9500;
		text-decoration: none;
		/* padding: 1em; */
	}

	.skipButton {
		color: #44494d;
		/* background: #fff; */
		text-decoration: none;
		border: solid 3px #444a4d;
		/* padding: 1em; */
	}
</style>

