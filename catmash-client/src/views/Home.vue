<template>
  <section class="hero is-large">
    <div class="hero-body">
      <h1 class="title catmash">CAT MASH</h1>
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
      catData: [],
      nbVotes: 0
    };
  },
  methods: {
    onCatSelected(value) {
      console.log(value);
      this.randomCatImage();
      this.nbVotes += 1;
    },
    randomCatImage() {
      const image = this.$store.state.allCats;
      const randomCat = _.shuffle(image);
      this.catData = randomCat;
    }
  },
  created() {
    this.$store.dispatch("getAllCats");
    this.randomCatImage();
  }
};
</script>

<style scoped>
.hero-body {
  height: 100vh;
}
.title.catmash {
  position: absolute;
  font-size: 4rem;
  font-weight: 700;
  color: #4c6273;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 769px) {
  .hero.is-large {
    margin-top: 30%;
  }
  .hero-body {
    height: 100%;
  }
  .title.catmash {
    position: absolute;
    font-size: 2rem;
    font-weight: 700;
    color: #4c6273;
    left: 50%;
    top: 13%;
    transform: translateX(-50%);
  }
}
</style>

