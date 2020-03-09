<template>
  <main id="home">
    <section class="home-headings">
      <p class="home-para">Know the facts behind</p>
      <p>the common myths of</p>
      <h1>Clinical Trials</h1>
    </section>

    <section class="play">
      <router-link class="playButton button" :to="{name: 'GameBox', props: { } }">Let's Go</router-link>
    </section>
    <section class="hex"></section>
    <footer>LakeRidge Health 2019</footer>
  </main>
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
#home {
  background: #c7c8ca;
  width: 100vw;
  height: 90vh;
  max-height: 100vh;
  overflow: hidden;
}

.home-headings {
  padding: 6rem 0;
}

h1 {
  align-items: center;
  font-size: 7rem;
  font-weight: 400;
  text-align: center;
  line-height: 8rem;
}
p {
  font-size: 4rem;
  font-weight: 400;
}

.play {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.playButton {
  height: 12rem;
  width: 55rem;
  font-size: 5rem;
  text-transform: uppercase;
  border-radius: 0.75rem;
  color: #fff;
  background: #fa9500;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  box-shadow: 0.1rem 0.1rem 0.3rem #242323;
}

.playButton:hover {
  box-shadow: none;
}

.hex {
  /* position: absolute; */
  margin-left: -10rem;
  margin-top: 32rem;
  width: 20rem;
  height: 20rem;
  background: rgba(255, 255, 255, 0.308);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>

