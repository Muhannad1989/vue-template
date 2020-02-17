<template>
  <div class="continer">
    <div class="content">
      <h1>About</h1>
      <Test :title="title" v-on:changeChild="changeTitle($event)" />
    </div>
  </div>
</template>

<script>
import Test from "./../components/Test";
export default {
  name: "about",
  data: () => {
    return {
      title: "Orginal Title"
    };
  },
  methods: {
    changeTitle(bla) {
      this.title = bla;
    }
  },
  components: {
    Test
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
  background: blueviolet;
  // height: 120px;
}
</style>
