<template>
  <section class="section">
    <h2 class="title has-text-centered">Top 5 des chat les plus mignon</h2>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent" v-for="cat in toptwoCats" :key="cat.id">
            <article class="tile is-child box">
              <h3 class="has-text-centered">{{ cat.ranking }}</h3>
              <figure class="image is-4by3">
                <img :src="cat.image">
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent" v-for="cat in topThreeToFiveCats" :key="cat.id">
        <article class="tile is-child box">
          <h3 class="has-text-centered">{{ cat.ranking }}</h3>
          <figure class="image is-4by3">
            <img :src="cat.image">
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    toptwoCats: {
      type: Array,
      required: true
    },
    topThreeToFiveCats: {
      type: Array,
      required: true
    }
  }
};
</script>
