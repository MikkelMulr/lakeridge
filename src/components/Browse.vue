<template>
	<div id="Browse">
		<QuestionList :mythData="this.myths" />
	</div>
</template>

<script>
	import QuestionList from "./QuestionList";
	import axios from "axios";

	export default {
		name: "Browse",
		props: {},
		components: {
			QuestionList
		},
		data() {
			return {
				myths: {}
			};
		},
		created() {
			axios.get("./data.json").then(response => (this.myths = response));
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Browse {
	width: 95vw;
	min-height: 70vh;
	margin: 0 auto;
}
</style>
