<template>
  <div class="sidebar">
    Sidebar
    <p>{{ Title }}</p>
    <button @click="change">change</button>
    <button @click="change2">change</button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["Title"],
  data: () => {
    return {
      name: "Hiba"
    };
  },
  methods: {
    change() {
      this.$emit("changing", this.name);
    },
    change2() {
      this.Title = "xxxxxxxxxxx";
    }
  }
};
</script>
<style scoped lang="scss">
.sidebar {
  background: green;
  p {
    background: red;
  }
}
</style>
