<template>
  <div class="total-vote">
    <p class="has-text-centered">{{ nbVotes }} votes</p>
    <router-link
      class="button is-info is-outlined is-large is-fullwidth"
      to="/scoreboard"
    >Voir les plus beaux chats</router-link>
  </div>
</template>

<script>
export default {
  props: {
    nbVotes: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style scoped>
.total-vote {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
