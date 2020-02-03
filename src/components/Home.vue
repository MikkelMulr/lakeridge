<template>
  <div id="Home">
    <h2>LakeRidge Home</h2>
    <router-link :to="{name: 'Browse', props: { } }">Browse Myths</router-link>
    <router-link :to="{name: 'GameBox', props: { } }">Play Game</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
