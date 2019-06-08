<template>
  <div class="scoreboard">
    <!-- top 5 cats -->
    <top-five-cats :toptwoCats="topTwoCats" :topThreeToFiveCats="topThreeToFiveCats"></top-five-cats>
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
import TopFiveCats from "@/components/scoreboard/TopFiveCats.vue";
import AllOthersCats from "@/components/scoreboard/AllOthersCats.vue";

export default {
  name: "scoreboard",
  components: {
    TopFiveCats,
    AllOthersCats
  },
  data() {
    return {
      topTwoCats: [
        { id: 1, ranking: 1, image: "https://picsum.photos/300/200/?random" },
        { id: 2, ranking: 2, image: "https://picsum.photos/300/200/?random" }
      ],
      topThreeToFiveCats: [
        { id: 3, ranking: 3, image: "https://picsum.photos/300/200/?random" },
        { id: 4, ranking: 4, image: "https://picsum.photos/300/200/?random" },
        { id: 5, ranking: 5, image: "https://picsum.photos/300/200/?random" }
      ],
      allOthersCats: [
        { id: 6, ranking: 7, image: "https://picsum.photos/300/200/?random" },
        { id: 7, ranking: 8, image: "https://picsum.photos/300/200/?random" },
        { id: 8, ranking: 9, image: "https://picsum.photos/300/200/?random" },
        { id: 9, ranking: 21, image: "https://picsum.photos/300/200/?random" },
        { id: 10, ranking: 13, image: "https://picsum.photos/300/200/?random" },
        { id: 11, ranking: 12, image: "https://picsum.photos/300/200/?random" }
      ]
    };
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
