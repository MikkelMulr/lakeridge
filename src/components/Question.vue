<template>
  <div class="Question">
    <h4>{{myth}}</h4>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    myth: String,
    answer: Boolean
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
