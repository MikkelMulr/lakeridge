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
  width: 100vw;
  height: 100vh;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 300px; */
}
</style>
