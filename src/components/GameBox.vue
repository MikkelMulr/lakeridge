<template>
  <div id="Browse">
    <h2>Myths</h2>
    <QuestionList :mythData="this.myths" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GameBox",
  props: {},
  components: {
    
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
