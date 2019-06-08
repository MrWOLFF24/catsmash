<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <nav class="level">
          <cats-image :onClick="onCatSelected" :cat="catData[0]"></cats-image>
          <cats-image :onClick="onCatSelected" :cat="catData[1]"></cats-image>
        </nav>
      </div>
    </div>
    <score-btn :nbVotes="nbVotes"></score-btn>
  </section>
</template>

<script>
import CatsImage from "@/components/home/CatsImage.vue";
import ScoreBtn from "@/components/buttons/ScoreBtn.vue";

export default {
  name: "home",
  components: {
    CatsImage,
    ScoreBtn
  },
  data() {
    return {
      catData: [
        { id: 1, ranking: 1, image: "https://picsum.photos/200" },
        { id: 2, ranking: 2, image: "https://picsum.photos/200" }
      ],
      nbVotes: 0
    };
  },
  methods: {
    onCatSelected(value) {
      console.log(value);
      this.catData[0].image = "https://picsum.photos/200/200/?random";
      this.catData[1].image = "https://picsum.photos/200/200/?random";
      this.nbVotes += 1;
    }
  }
};
</script>

<style scoped>
.hero-body {
  height: 100vh;
}
@media screen and (max-width: 640px) {
  .hero.is-large {
    margin-top: 20%;
  }
  .hero-body {
    height: 100%;
  }
}
</style>

