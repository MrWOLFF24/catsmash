<template>
  <div class="level-item has-text-centered">
    <a @click="onClick(cat.id)">
      <img :src="cat.image" alt="cute cat">
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
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
}
@media screen and (max-width: 640px) {
  .level-item:last-child {
    margin-top: 50px;
  }
}
</style>
