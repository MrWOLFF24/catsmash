<template>
  <div class="level-item has-text-centered">
    <a @click="onClick(cat)">
      <figure>
        <img height="200" width="200" :src="cat.image" alt="cute cat">
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 50%;
  border: 1rem solid #edf0f0;
}
@media screen and (max-width: 769px) {
  .level-item:last-child {
    margin-top: 50px;
  }
}
</style>
