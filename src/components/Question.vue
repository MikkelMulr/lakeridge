// This component is used to display the myth (chat bubbles) to the user while in game mode
<template>
  <div class="Question">
    <div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
      <p>{{item}}</p>
    </div>
    <div class="choices">
      <div class="nextBtn" v-on:click="nextEvent">Fact</div>
      <div class="nextBtn" v-on:click="nextEvent">Myth</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    mythData: Object,
    nextEvent: Function,
    testData: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Question {
  width: 25vw;
  height: 500px;
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: appear 0.8s ease-out;
}

p {
  padding: 1rem;
  color: #fff;
  width: 70%;
  height: auto;
}

.bubble:nth-child(even) p {
  background-color: rgb(92, 145, 161);
}

.bubble:nth-child(odd) p {
  background-color: #aaa;
}

.nextBtn {
  font-size: 2rem;
  padding: 2rem;
  height: 60px;
  width: 40%;
  color: #fff;
  background-color: rgb(92, 145, 161);
  cursor: pointer;
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
    transform: translateY(0px);
  }
}
</style>
