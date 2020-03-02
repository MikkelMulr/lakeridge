<template>
  <div class="Header">
    <header>
      <img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header {
  width: 100vw;
  height: 10vh;
}

.logo {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>
