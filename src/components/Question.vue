<template>
  <div class="Question">
    <h4>{{mythData.myth_title}}</h4>
    <div class="true" v-on:click="nextEvent">True</div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    mythData: Object,
    nextEvent: Function
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
