<template>
  <div>
    <p>{{ title }}</p>
    <Sidebar :Title="title" v-on:changing="changeTitle($event)" />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "Test",
  data: () => {
    return {
      title: "YYYYYYYYYYYYY"
    };
  },
  methods: {
    changeTitle(e) {
      this.title = e;
    }
  },
  components: {
    Sidebar
  }
};
</script>
<style>
p {
  background: blueviolet;
}
</style>
