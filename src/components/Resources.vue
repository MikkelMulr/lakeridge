<template>
  <div class="Resources">
    <div class="Resource-cards">
      <div class="resource-card" v-for="(item) in this.resources" :key="item.id">
        <h2>{{item.res[0].title}}</h2>
        <div class="links">
          <a :href="item.res[0].href">{{item.res[0].href}}</a>
          <a :href="item.res[1].href">{{item.res[1].href}}</a>
        </div>
      </div>
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
    axios
      .get("./data.json")
      .then(response => (this.resources = response.data.resources));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Resources {
  border-radius: 10px;
  width: 320px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  /* background: red; */
}

.Resource-cards {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.resource-card {
  width: 15vw;
  height: 26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(211, 211, 211);
}

.links {
  padding: 1rem;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.links a {
  padding: 2rem 0;
}
</style>
