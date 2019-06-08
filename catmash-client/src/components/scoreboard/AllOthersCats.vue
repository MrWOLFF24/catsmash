<template>
  <section class="section">
    <h2 class="title has-text-centered">Tous les autres chats</h2>
    <div class="container">
      <div class="card" v-for="cat in allOthersCats" :key="cat.id">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="cat.image" alt="cute cat image">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allOthersCats: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}
.card {
  height: max-content;
}
</style>
