<template>
  <div id="Home">
    <h2>{{msg}}</h2>
    <QuestionList :mythData="mythData" />
  </div>
</template>

<script>
import QuestionList from "./QuestionList.vue";

export default {
  name: "Home",
  props: {
    msg: String,
    mythData: Array
  },
  components: {
    QuestionList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
