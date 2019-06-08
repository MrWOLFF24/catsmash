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
