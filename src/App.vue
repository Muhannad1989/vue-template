<template>
  <div id="app" class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background: crimson; */
}

.continer {
  width: 100%;
  min-height: 100vh;
}

.example {
  height: 200px;
  background: red;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 420px) {
  .example {
    background: red;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 420px) {
  .example {
    background: green;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {
    background: blue;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  /*  */
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  /*  */
}
</style>
