// This component is used to display the myth (chat bubbles) to the user while in game mode
<template>
  <main class="Question">
    <!-- <header>
      <img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
    </header>-->
    <section class="device">
      <div class="marvel-device iphone-x">
        <div class="notch">
          <div class="camera"></div>
          <div class="speaker"></div>
        </div>
        <div class="top-bar"></div>
        <div class="sleep"></div>
        <div class="bottom-bar"></div>
        <div class="volume"></div>
        <div class="overflow">
          <div class="shadow shadow--tr"></div>
          <div class="shadow shadow--tl"></div>
          <div class="shadow shadow--br"></div>
          <div class="shadow shadow--bl"></div>
        </div>
        <div class="inner-shadow"></div>
        <div class="screen">
          <!-- Content goes here -->
          <!-- <div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
						<p>{{item}}</p>
          </div>-->
          <div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
            <p>{{item}}</p>
          </div>
          <div class="choices">
            <div class="nextBtn" v-on:click="nextEvent">Fact</div>
            <div class="nextBtn" v-on:click="nextEvent">Myth</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Question",
  props: {
    mythData: Object,
    nextEvent: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styles/devices.min.css";

.Question {
  height: 90vh;
  width: 100vw;
  overflow: hidden;
}

.device {
  width: 100vw;
  height: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  animation: appear 0.8s ease-out;
  overflow: hidden;
}

/* .logo {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
} */
.screen {
  padding: 5vh;
}

p {
  padding: 1rem;
  color: #fff;
  /* width: 70%; */
  height: auto;
  border-radius: 3.5rem;
  padding: 3rem;
  margin: 1rem 0;
  font-size: 2rem;
  text-align: left;
  line-height: 2.15rem;
}

.bubble:nth-child(even) p {
  /* background-color: rgb(92, 145, 161); */
  background-color: #27aae1;
}

.bubble:nth-child(odd) p {
  /* background-color: #aaa; */
  background-color: #c7c8ca;
}

.nextBtn {
  font-size: 2rem;
  padding: 2rem;
  height: 60px;
  width: 40%;
  color: #fff;
  background-color: rgb(92, 145, 161);
  cursor: pointer;
  border-radius: 10rem;
}

.choices {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

@keyframes appear {
  0% {
    transform: translateY(500px);
  }

  100% {
    transform: translateY(10rem);
  }
}
</style>
