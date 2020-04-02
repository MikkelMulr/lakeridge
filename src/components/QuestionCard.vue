<template>
	<div class="QuestionCard" v-on:click="handleClick(id - 1)">
    <img :src="require(`../assets/images/0${id}illust.png`)" alt="ill" />
		<h4>{{myth}}</h4>
	</div>
</template>

<script>
	export default {
		name: "QuestionCard",
		props: {
			myth: String,
      id: Number,
      art: String,
			handleClick: Function
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.QuestionCard {
  height: 200px;
  margin: 15% 2.5% 2.5%;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 5px solid rgba(56, 56, 56, 0.1);
  border-radius: 10px;
  background: #fff;
  font-size: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.QuestionCard:hover {
  border: 5px solid rgba(56, 56, 56, 0.4);
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
}

.QuestionCard img {
  margin: 10% auto 0;
  width: 20%;
  bottom: 60px;
  transform-origin: bottom;
  transform: scale(5);
  filter: saturate(0.5);
  transition: all 0.25s ease-in-out;
}

.QuestionCard:hover img {
  transform: scale(5.2);
  filter: saturate(1.2);
}

</style>
