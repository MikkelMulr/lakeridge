<template>
  <div id="QuestionList">
    <div class="CardView" v-if="this.viewState">
      <Information
        :mythData="mythData.data.myths[this.mythClicked]"
        :nextEvent="updateCurrentMyth"
      />
    </div>
    <div class="CardView" v-else>
      <QuestionCard
        v-for="(item) in mythData.data.myths"
        :key="item.id"
        :myth="item.myth_title"
        :handleClick="updateViewState"
        v-on:click="updateMythClicked(item.id)"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from "./QuestionCard.vue";
import Information from "./Information";

export default {
  name: "QuestionList",
  props: {
    mythData: Object
  },
  data() {
    return {
      viewState: false,
      mythClicked: 0
    };
  },
  components: {
    QuestionCard,
    Information
  },
  methods: {
    updateViewState: function() {
      this.viewState = !this.viewState;
    },
    updateMythClicked: function(id) {
      this.mythClicked = id;
      this.updateViewState();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#QuestionList {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
