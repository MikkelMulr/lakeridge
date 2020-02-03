<template>
  <div id="Browse">
    <div class="viewState" v-if="this.viewState">
      <Information
        :mythData="this.myths.data.myths[this.currentMyth]"
        :nextEvent="updateCurrentMyth"
      />
    </div>
    <div class="viewState" v-else>
      <Question :mythData="this.myths.data.myths[this.currentMyth]" :nextEvent="updateViewState" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Question from "./Question";
import Information from "./Information";

export default {
  name: "GameBox",
  props: {},
  components: {
    Question,
    Information
  },
  data() {
    return {
      myths: null,
      currentMyth: 0,
      viewState: false
    };
  },
  methods: {
    updateCurrentMyth: function() {
      this.currentMyth += 1;
      this.viewState = !this.viewState;
    },
    updateViewState: function() {
      this.viewState = !this.viewState;
    }
  },
  created() {
    axios.get("./data.json").then(response => (this.myths = response));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
