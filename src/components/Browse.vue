<template>
  <div id="Browse">
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
#Browse {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
