// This component is where the overall game is housed, containing everything required to play the game mode
<template>
	<div id="GameBox">
		<div class="viewState info" v-if="this.viewState">
			<Information
				:mythData="this.myths.data.myths[this.currentMyth]"
				:nextEvent="updateCurrentMyth"
				:viewType="'game'"
			/>
		</div>
		<div class="viewState question" v-else>
			<Question
				:testData="this.myths.data.myths"
				:mythData="this.myths.data.myths[this.currentMyth]"
				:buttons="this.myths.data.myths[this.currentMyth].answers"
				:nextEvent="updateViewState"
			/>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Question from "./Question";
	import Information from "./Information";

	export default {
		name: "GameBox",
		props: {},
		components: {
			Question,
			Information
		},
		data() {
			return {
				myths: null,
				currentMyth: 0,
				viewState: false
			};
		},
		methods: {
			updateCurrentMyth: function() {
				if (this.currentMyth == 5) {
					this.$router.push({ name: "Resources" });
				} else {
					this.currentMyth += 1;
					this.viewState = !this.viewState;
				}
			},
			updateViewState: function() {
				this.viewState = !this.viewState;
			}
		},
		created() {
			axios.get("./data.json").then(response => (this.myths = response));
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.question {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
