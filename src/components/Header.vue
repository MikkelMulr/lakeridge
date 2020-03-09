<template>

  <header class="Header">
    <router-link :to="{name: 'Home', props: { } }">
      <img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
    </router-link>

    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'Home', props: { } }">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Browse', props: { } }">Browse Myths</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Resources', props: { } }">Resources</router-link>
        </li>
      </ul>
    </nav>
  </header>
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
  display: flex;
  flex-direction: row;
}

.logo {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

nav {
  margin-left: auto;
  font-size: 2.5rem;
}

li {
  list-style: none;
  display: inline-block;
  color: #231f20;
  padding: 5rem 9rem 0rem 0.001rem;
  text-decoration: none;
}

li, a,
  :visited {
    color: #231f20;
    text-decoration: none;
  @media only screen and (max-width: 599px) {
    .logo {
      width: 70%;
    }
  }
}
</style>
