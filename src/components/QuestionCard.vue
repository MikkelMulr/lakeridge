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
  margin: 15% 2.5% 2.5%;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 5px solid rgba(39, 170, 225, 0.3);
  border-radius: 10px;
  background: #fff;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.QuestionCard:hover {
  border: 5px solid rgba(39, 170, 225, 0.8);
  box-shadow: 2px 5px 10px rgba(39, 170, 225, 0.2);
}

.QuestionCard img {
  margin: 10% auto 0;
  width: 55px;
  height: 55px;
  bottom: 60px;
  transform-origin: bottom;
  transform: scale(5.7);
  filter: saturate(0.5);
  transition: all 0.25s ease-in-out;
}

.QuestionCard:hover img {
  transform: scale(6);
  filter: saturate(1.2);
}

@media only screen and (max-width: 64em) {
  .QuestionCard {
    flex-basis: 40%;
    margin-top: 20%;
  }

  .QuestionCard img {
    height: 35px;
    width: 35px;
  }
}

@media only screen and (max-width: 40em) {
  .QuestionCard {
    flex-basis: 90%;
    margin-top: 50%;
  }

  .QuestionCard:last-of-type {
    margin-bottom: 40px;
  }

  .QuestionCard img {
    height: 40px;
    width: 40px;
  }
}
</style>
