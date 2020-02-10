<template>
  <div id="Information">
    <h2>{{mythData.myth_title}}</h2>
    <p>{{mythData.fact_title}}</p>
    <div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
      <p class="fact">{{item}}</p>
    </div>
    <div class="Information--nextBtn" v-on:click="nextEvent">Next</div>
    <router-link :to="{name: 'Home', props: { } }">Exit Game</router-link>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    mythData: Object,
    nextEvent: { type: Function }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.facts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.fact {
  width: 50%;
  height: auto;
  padding: 1rem;
  background-color: #ddd;
  color: #000;
}
</style>
