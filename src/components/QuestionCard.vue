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
  border-radius: 10px;
  width: 320px;
  height: 150px;
  background: red;
}
</style>
