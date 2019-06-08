<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
em,
img,
small,
strong,
ol,
ul,
li,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  box-sizing: border-box;
}
html {
  font-family: "Noto Sans", sans-serif;
}
ol,
ul {
  list-style: none;
}
.container {
  height: calc(100vh - 105px);
  display: flex;
  justify-content: center;
}
.row {
  width: 100%;
  display: flex;
}
.column {
  display: flex;
  justify-content: center;
  flex: 33.33%;
  padding: 5px;
}
@media screen and (max-width: 500px) {
  .column {
    min-width: 100%;
  }
}
</style>
