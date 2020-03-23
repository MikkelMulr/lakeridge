<template>
	<div class="QuestionCard" v-on:click="handleClick(id - 1)">
		<h4>{{myth}}</h4>
	</div>
</template>

<script>
	export default {
		name: "QuestionCard",
		props: {
			myth: String,
			id: Number,
			handleClick: Function
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.QuestionCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 70vw;
  height: 85px;
  background: #ddd;
  margin: 2rem 0;
  font-size: 2rem;
  transition: all 0.35s linear;
  cursor: pointer;
}

.QuestionCard:hover {
  transform: scale(1.075);
  background-color: #27aae1;
  color: #fff;
  box-shadow: 0.1rem 0.1rem 0.9rem 0.5rem #eeeeee44;
}

</style>
