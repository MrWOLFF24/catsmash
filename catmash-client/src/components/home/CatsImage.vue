<template>
  <div class="level-item has-text-centered">
    <a @click="onClick(cat)">
      <figure class="round">
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
.round {
  height: 200px;
  width: 200px;
}
img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 1rem solid #edf0f0;
}
@media screen and (max-width: 769px) {
  .level-item:last-child {
    margin-top: 50px;
  }
}
</style>
