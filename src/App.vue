<template>
  <div id="app">
    <Home msg="Lakeridge Trials: Fact vs Fiction" :mythData="this.myths.data.myths" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    Home
  },
  data() {
    return {
      myths: null
    };
  },
  mounted() {
    axios.get("./data.json").then(response => (this.myths = response));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
