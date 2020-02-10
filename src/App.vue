<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* setting root font size */
html {
  font-size: 62.5%;
}
#app {
  font-family: "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #231f20;
  overflow-x: hidden;
}
</style>
