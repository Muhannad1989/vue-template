<template>
  <div id="nav" class="header">
    <router-link to="/" exact>Home</router-link>
    <router-link to="/blog" exact>Blog</router-link>
    <router-link to="/about" exact>About</router-link>
    <router-link to="/contact" exact>Contact</router-link>
    <router-link to="/videos" exact>Videos</router-link>
    <router-link to="/photos" exact>Potos</router-link>
  </div>
</template>
<script>
//
</script>
<style scoped lang="scss">
.router-link-active {
  background: red;
}
.header {
  width: 100%;
  background: #181818;
  display: flex;
  justify-content: start;
  flex-wrap: nowrap;
  z-index: 2;
  a {
    color: white;
    text-decoration: none;
    padding: 13px 20px;
    font-size: 1.1em;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: #181818;
    background: white;
  }
}
</style>
