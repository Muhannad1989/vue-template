<template>
  <div>
    <p>{{ title }}</p>
    <button @click="changeTitleFromComponent">change title from page</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["title"],
  methods: {
    changeTitleFromComponent() {
      // this.title = "title is changed from component";
      this.$emit("changeChild", "xxx");
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  color: white;
}
</style>
