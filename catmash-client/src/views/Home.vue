<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <img src="https://picsum.photos/200" alt>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <img src="https://picsum.photos/200" alt>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <score-btn :nbVotes="nbVotes"></score-btn>
  </section>
</template>

<script>
import ScoreBtn from "@/components/buttons/ScoreBtn.vue";

export default {
  name: "home",
  components: {
    ScoreBtn
  },
  data() {
    return {
      nbVotes: 0
    };
  }
};
</script>
