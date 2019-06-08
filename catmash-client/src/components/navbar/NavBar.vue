<template>
  <nav class="navbar-image" role="navigation">
    <ul>
      <router-link to="/">
        <li>
          <img width="100%" src="../../assets/catsmash-logo.svg" alt="catmash cute cat">
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.navbar-image {
  width: 120px;
  position: absolute;
  z-index: 20;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 640px) {
  .navbar-image {
    width: 100px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

