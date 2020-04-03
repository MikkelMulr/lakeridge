<template>
  <div class="Resources">
    <h1>Additional information and resources</h1>
    <div class="resource-card" v-for="(item) in this.resources" :key="item.id">
      <h2>{{item.res[0].title}}</h2>
      <div class="links">
        <a :href="item.res[0].href" target="_blank">{{item.res[0].href}}</a>
        <a :href="item.res[1].href" target="_blank">{{item.res[1].href}}</a>
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
  margin: auto;
  width: 95vw;
  min-height: 82vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: center; */
  flex-wrap: wrap;
  background: #f1f1f1;
}

h1 {
  font-size: 40px;
  font-weight: 400;
  flex: 0 0 100%;
  padding: 20px;
  background: rgba(56, 56, 56, 0.2);
  border-radius: 10px 10px 0 0;
  text-transform: capitalize;
  text-align: center;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.1),
    inset -1px -1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.resource-card {
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
  margin: 30px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(56, 56, 56, 0.2);
  transition: 0.2s;
}

.resource-card:hover {
  box-shadow: 2px 2px 10px rgba(39, 170, 225, 0.2);
}

h2 {
  padding: 15px 20px;
  font-size: 30px;
  font-weight: 600;
  background: rgba();
  background: rgba(39, 170, 225, 0.5);
  border-radius: 10px 10px 0 0;
}

.links {
  padding: 20px;
  padding-top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.links a {
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 1px;
  color: #383838;
}

.links a:hover {
  text-decoration-thickness: 2px;
}

@media only screen and (max-width: 64em) {
  .resource-card {
    flex: 0 0 40%;
    margin: 20px;
  }

  h1 {
    margin-bottom: 0px;
  }
}

@media only screen and (max-width: 40em) {
  h1 {
    font-size: 26px;
    padding: 10px;
    margin-bottom: 0px;
  }

  .resource-card {
    flex: 1 0 80%;
    margin: 20px;
  }

  h2 {
    padding: 15px 20px;
    font-size: 20px;
  }

  .links a {
    font-size: 14px;
  }
}
</style>
