<template>
  <div class="scoreboard">
    <!-- top 5 cats -->
    <section class="section">
      <h2 class="title has-text-centered">Le Top 5</h2>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h3 class="has-text-centered">1</h3>
                <figure class="image is-4by3">
                  <img src="https://picsum.photos/300/200/?random">
                </figure>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h3 class="has-text-centered">2</h3>
                <figure class="image is-4by3">
                  <img src="https://picsum.photos/300/200/?random">
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h3 class="has-text-centered">3</h3>
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random">
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h3 class="has-text-centered">4</h3>
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random">
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h3 class="has-text-centered">5</h3>
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random">
            </figure>
          </article>
        </div>
      </div>
    </section>
    <!-- all cats -->
    <section class="section">
      <h2 class="title has-text-centered">Tous les autres</h2>
      <div class="container">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://picsum.photos/300/200/?random" alt="Placeholder image">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <router-link class="button home-page" to="/">
      <span class="icon">
        <i>&#8592;</i>
      </span>
      <span>Voter</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "scoreboard",
  components: {}
};
</script>

<style scoped>
.scoreboard {
  margin-top: 80px;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}
.card {
  height: max-content;
}
.button.home-page {
  position: absolute;
  top: 40px;
  left: 25px;
}
</style>
