<template>
  <main id="home">
    <section class="home-first-half">
      <header>
        <img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
      </header>
      <section class="home-headings">
        <h1>LAKERIDGE HEALTH</h1>
        <h2>MYTHS VS FACTS</h2>
      </section>
    </section>

    <section class="home-second-half">
      <section>
        <router-link class="playButton button" :to="{name: 'GameBox', props: { } }">Let's Go</router-link>
        <p class="button-tag-line">Play a trivia game about myths</p>
        <!-- </section>
        <section>-->
        <router-link class="skipButton button" :to="{name: 'Browse', props: { } }">Browse Myths</router-link>
        <p class="button-tag-line">Read the facts of clinical trials</p>
      </section>
    </section>
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
  display: flex;
  flex-direction: row;
}
.home-first-half {
  /* background-image: url(/images/bg.jpg); */
  background-image: url(../assets/images/bg@2x.jpg);
  background-size: cover;
  background-position: top;
  width: 50%;
  height: 100vh;
}
.logo {
  padding: 3rem;
  display: flex;
  flex-direction: row;
}
.home-headings {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  padding: 18rem 0 0 10rem;
}
h1 {
  align-items: center;
  font-size: 10rem;
  font-weight: 400;
  text-align: left;
  line-height: 8rem;
}
h2 {
  font-size: 8rem;
  font-weight: 400;
}
.button {
  height: 12rem;
  width: 45rem;
  margin-bottom: 1vh;
  font-size: 5rem;
  text-transform: uppercase;
  border-radius: 0.75rem;
}

.button-tag-line {
  font-size: 2.2rem;
  font-weight: 400;
}
.home-second-half {
  width: 50%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.playButton {
  color: #fff;
  background: #fa9500;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  box-shadow: 0.2rem 0.2rem 0.6rem #000000;
}

.playButton:hover {
  /* border: solid 0.1rem #23aa4a; */
  box-shadow: none;
}

.skipButton {
  color: #44494d;
  text-decoration: none;
  border: solid 0.1rem #444a4d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  font-weight: 400;
}
.skipButton:hover {
  border: none;
  color: #fff;
  background: #23aa4a;
  box-shadow: 0.2rem 0.2rem 0.6rem #000000;
}
</style>

