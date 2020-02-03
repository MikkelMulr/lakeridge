<template>
  <div id="QuestionList">
    <Question
      v-for="(item) in mythData.data.myths"
      :key="item.id"
      :myth="item.myth"
      :answer="item.true_or_false"
    />
  </div>
</template>

<script>
import Question from "./Question.vue";

export default {
  name: "QuestionList",
  props: {
    mythData: Array
  },
  components: {
    Question
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#QuestionList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #aaa;
}
</style>
