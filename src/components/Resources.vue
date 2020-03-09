<template>
  <div class="Resources">
    <h4>Resources</h4>
    <div class="bubble" v-for="(item) in this.resources.data.resources.res" :key="item.id">
      <h2>{{item.title}}</h2>
      <a :href="item.href[0]"></a>
      <a :href="item.href[1]"></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Resources",
  props: {},
  data() {
    return {
      resources: {}
    };
  },
  created() {
    axios.get("./data.json").then(response => (this.resources = response));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Resources {
  border-radius: 10px;
  width: 320px;
  height: 90vh;
  background: red;
}
</style>
