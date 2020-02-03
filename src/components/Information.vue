<template>
  <div id="Information">
    <h2>{{mythData.myth_title}}</h2>
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
</style>
