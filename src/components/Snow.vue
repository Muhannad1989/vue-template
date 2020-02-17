<template>
  <div class="snow bla" :style="style()"></div>
</template>

<script>
export default {
  name: "Snow",
  methods: {
    style() {
      let size = Math.floor(Math.random() * 50) + "px";
      let opacitySize = Math.floor(Math.random() * 9);
      return {
        left: Math.floor(Math.random() * 100) + "%",
        width: size,
        height: size,
        opacity: `0.${opacitySize}`,
        // borderRadius: "50%",
        animationDelay: Math.floor(Math.random() * 10) + "s"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.snow {
  // width: 50px;
  // height: 50px;
  background: white;
  border-radius: 6px;
  position: absolute;
  // top: 0;
  left: 11px;
  // opacity: 0.6;
  transform: rotate(40deg);
  animation: anim 10s linear infinite;
  transition: all 0.5s ease-in-out;
}

@keyframes anim {
  0% {
    // display: none;
    transform: rotate(360deg);
    top: -80px;
  }

  100% {
    top: 550px;
    transform: rotate(0deg);
  }
}
</style>
