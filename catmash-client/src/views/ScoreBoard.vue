<template>
  <div class="scoreboard">
    <!-- top 5 cats -->
    <top-two-cats :toptwoCats="topTwoCats"></top-two-cats>
    <!-- all others cats -->
    <all-others-cats :allOthersCats="allOthersCats"></all-others-cats>
    <!-- back navigation btn -->
    <router-link class="button is-info is-outlined home-page" to="/">
      <span class="icon">
        <i>&#8592;</i>
      </span>
      <span>Voter</span>
    </router-link>
  </div>
</template>

<script>
import TopTwoCats from "@/components/scoreboard/TopTwoCats.vue";
import AllOthersCats from "@/components/scoreboard/AllOthersCats.vue";

export default {
  name: "scoreboard",
  components: {
    TopTwoCats,
    AllOthersCats
  },
  data() {
    return {
      topTwoCats: [],
      allOthersCats: []
    };
  },
  methods: {
    setCatsresult() {
      const { othersCats, topTwoCats } = this.$store.state.top2AndOthers;
      this.topTwoCats = topTwoCats;
      this.allOthersCats = othersCats;
    }
  },
  mounted() {
    this.$store.dispatch("getTopCatsAndOthers");
    this.setCatsresult();
  }
};
</script>

<style scoped>
.scoreboard {
  margin-top: 80px;
}
.button.home-page {
  position: absolute;
  top: 40px;
  left: 25px;
}
</style>
