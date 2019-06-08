<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <nav class="level">
          <cats-image :onClick="onCatSelected" :cat="catData"></cats-image>
          <cats-image :onClick="onCatSelected" :cat="catData"></cats-image>
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
      catData: { id: 1, image: "https://picsum.photos/200" },
      nbVotes: 0
    };
  },
  methods: {
    onCatSelected(value) {
      console.log(value);
    }
  }
};
</script>
