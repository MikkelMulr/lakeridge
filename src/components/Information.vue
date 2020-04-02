// This component serves 2 purposes:
// 1 - display Myth "facts" after a user (while in game mode) has clicked their "answer" to a myth scenario
// 2 - display Myth information respective to the myth card that is selected while in browse mode
<template>
  <div id="Information" v-if="viewType == 'browse'">
    <!-- container for Information -->
    <div class="infoCont">
      <h2>{{mythData.myth_title}}</h2>
      <p>{{mythData.fact_title}}</p>
      <div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
        <p class="fact">{{item}}</p>
      </div>
      <!-- <div class="Information--nextBtn" v-on:click="returnTo">Back to Myths</div> -->
    </div>

    <!-- container for img -->
    <div class="imgCont">
      <img :src="require(`../assets/images/0${mythData.id}illust.png`)" alt="Illustration" />
    </div>
    <div class="backTo" v-on:click="returnTo">
      <img src="../assets/images/next.svg" alt="nextBtn" />
    </div>
  </div>
  <div id="Information" v-else>
    <!-- container for Information -->
    <div class="infoCont">
      <h2>{{mythData.myth_title}}</h2>
      <p>{{mythData.fact_title}}</p>
      <div class="facts" v-for="(item) in mythData.facts.fact_list" :key="item">
        <p class="fact">{{item}}</p>
      </div>
    </div>

    <!-- container for img -->
    <div class="imgCont">
      <img :src="require(`../assets/images/0${mythData.id}illust.png`)" alt="Illustration" />
    </div>
    <div class="Information--nextBtn" v-on:click="nextEvent">
      <img src="../assets/images/next.svg" alt="nextBtn" />
    </div>
  </div>
</template>

<script>
// <router-link :to="{name: 'Home', props: { } }">Exit Game</router-link>

export default {
  name: "Information",
  props: {
    mythData: Object,
    returnTo: { type: Function },
    nextEvent: { type: Function },
    viewType: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Import fonts */
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import "../assets/styles/devices.min.css";
/* Information Container */
#Information {
  position: relative;
  height: 82vh;
  width: 95vw;
  font-family: "Open Sans";
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
}

/* Information Container styles */
.infoCont {
  width: 50%;
  padding: 50px;
  padding-right: 25px;
}

.infoCont h2 {
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 300;
}

.fact {
  font-size: 24px;
  margin: 20px auto;
  padding: 10px 30px;
  opacity: 0;
  border-left: 5px solid #383838;
  border-radius: 0 5px 5px 0;
  animation: show 0.35s ease-out forwards;
}

.facts:nth-of-type(1) .fact {
  animation-delay: 0.45s;
}

.facts:nth-of-type(2) .fact {
  animation-delay: 0.9s;
}

.facts:nth-of-type(3) .fact {
  animation-delay: 1.35s;
}

@keyframes show {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Image Container Styles */
.imgCont {
  width: 50%;
  padding: 50px;
  padding-left: 25px;
}

.imgCont img {
  width: 100%;
}

.Information--nextBtn {
  position: absolute;
  bottom: 20px;
  right: 40px;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
}

.Information--nextBtn img {
  width: 90%;
}

.backTo {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
}

.backTo img {
  width: 90%;
  /* transform: rotate(180deg); */
}

/* Mobile View */
@media only screen and (max-width: 599px) {
  #Information {
    flex-direction: column;
  }
  .imgCont {
    margin-top: 0px;
    width: 100%;
    padding: 0px 50px;
  }
}
</style>
