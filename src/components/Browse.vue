<template>
  <div id="Browse">
    <h2>Myths</h2>
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
      myths: null
    };
  },
  created() {
    axios.get("./data.json").then(response => (this.myths = response));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
