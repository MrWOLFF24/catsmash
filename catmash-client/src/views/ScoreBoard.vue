<template>
  <div class="scoreboard">
    <h1>This is an about page</h1>
    <div class="container">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
      <img src="https://picsum.photos/300/200/?random">
    </div>
  </div>
</template>

<script>
export default {
  name: "scoreboard",
  components: {}
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  margin: 5px;
  transition: all 2s;
}
img:hover {
  transform: scale (1.1);
}
</style>
