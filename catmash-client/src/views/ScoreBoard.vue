<template>
  <div class="scoreboard">
    <!-- top 5 cats -->
    <top-two-cats :top-two-cats="topTwoCats"></top-two-cats>
    <!-- all others cats -->
    <all-others-cats :all-others-cats="allOthersCats"></all-others-cats>
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
import { mapState } from "vuex";
import TopTwoCats from "@/components/scoreboard/TopTwoCats.vue";
import AllOthersCats from "@/components/scoreboard/AllOthersCats.vue";

export default {
  name: "scoreboard",
  components: {
    TopTwoCats,
    AllOthersCats
  },
  computed: mapState({
    topTwoCats: state => state.top2AndOthers.topTwoCats,
    allOthersCats: state => state.top2AndOthers.othersCats
  }),
  created() {
    this.$store.dispatch("getTopCatsAndOthers");
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
