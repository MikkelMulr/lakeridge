<template>
  <div class="QuestionCard">
    <h4>{{myth}}</h4>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    myth: String,
    id: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Question {
  width: 30vw;
  height: 100px;
  background: red;
}
</style>
