<template>
  <div class="continer">
    <div class="content">
      <h2>content</h2>
      <div class="example">
        <h2>example:responsive div</h2>
        <div class="section"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 820px) {
  .sidebar {
    width: 100%;
    background: red;
  }
}

.section {
  background: linear-gradient(
    145deg,
    rgb(240, 90, 40) 0px,
    rgb(232, 10, 137) 100%
  );
  height: 100%;
}

.content {
  width: 100%;
  position: relative;
  h2 {
    color: "red";
  }
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: blueviolet;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    display: none;
    a {
      display: block;
      padding: 0;
      width: 100%;
      background: #181818;
      line-height: 35px;
      text-align: center;
      padding: 15px auto;
      text-decoration: none;
      color: white;
      // border: 1px solid blanchedalmond;
    }
    a:hover {
      transition: all 0.5 ease-in-out;
      color: #181818;
      background: white;
    }
  }
}
</style>
