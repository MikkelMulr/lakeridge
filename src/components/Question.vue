<template>
  <div class="Question">
    <!-- <h4>{{mythData.myth_title}}</h4> -->
    <div class="bubble" v-for="(item) in mythData.bubbles" :key="item.id">
      <p>{{item}}</p>
    </div>
    <div class="nextBtn" v-on:click="nextEvent">Next Myth</div>
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
  color: #fff;
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
