<template>
  <div class="parent">
    <!-- desktop -->
    <div class="back">
      <div class="text-photo">
        <div class="left box">
          <h2>We provide solutions for your business!</h2>
          <div class="buttons">
            <a href="photos" target="_blank">
              <div @mousemove="movingBall" class="first-link">
                <div class="ball" id="ball"></div>
                <span class="link" id="link">
                  View palns
                </span>
              </div>
            </a>
            <!-- for test invidual -->
            <a href="photos" target="_blank">
              <div @click="check($event)" class="first-link">
                <div class="ball" id="ball"></div>
                <span class="link" id="link">
                  View palns
                </span>
              </div>
            </a>
            <!-- <a href="photos" target="_blank">Try for free</a> -->
          </div>
        </div>
        <div class="right box">
          <img src="./../assets/desktop.png" />
        </div>
      </div>
      <Snow v-for="index in 50" :key="index" />

      <div class="wave"></div>
    </div>
    <!-- boxes -->
    <div class="art-box" id="art-box">
      <div class="art-text" v-for="index in 6" :key="index">
        <h3>UI/UX Development</h3>
        <p>
          We provide top-notch UI/UX development services to get an eye-catching
          look for your solutions.
        </p>
      </div>
    </div>
    <div class="portfolio">
      <div class="pro" v-for="index in 6" :key="index">
        <div class="shivun">x</div>
        <div class="photo-parent">
          <img src="./../assets/desktop.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snow from "./../components/Snow";
export default {
  name: "photos",
  data() {
    return {
      length: [1, 2, 3, 4, 5],
      background: "green",
      left: "20px",
      rotate: "50deg",
      speed: "5s",
      delay: "10s"
    };
  },
  methods: {
    movingBall() {
      const ball = document.getElementById("ball");
      const link = document.getElementById("link");
      this.move = !this.move;
      ball.style.left = "88px";

      setTimeout(() => {
        link.style.color = "black";
        ball.style.transform = "scale(10, 10)";
      }, 500);
    },
    check(v) {
      console.log(v);
      console.log(this);
    }
  },
  components: {
    Snow
  },
  created: {},
  mounted: {},
  computed: {}
};

// on scrolling
window.onscroll = () => {
  // const childeren = document.getElementsByClassName("art-text");
  const artBox = document.getElementById("art-box");
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 260) {
    artBox.style.paddingTop = "40px";
    // for (let i = 0; i < childeren.length - 2; i++) {
    // childeren[i].style.background = "green";
    // }
  }
};

// let snow = document.getElementsByClassName("snow");
// for (let j = 0; j < snow.length; j++) {
// snow[j].style.animation = `anim ${0.5}s linear infinite`;
// }
</script>
<style lang="scss">
.back {
  background: linear-gradient(145deg, #f05a28 0px, #e80a89 100%);
  position: relative;
  height: 110vh;
  width: 100%;
}

// ----------------------------------
.parent {
  width: 100%;
  h2 {
    text-align: center;
    color: white;
    font-size: 3em;
  }
}

.text-photo {
  padding: 120px 90px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .box {
    width: 50%;
    img {
      width: 100%;
    }
    .buttons {
      // padding: 20px;
      margin-top: 100px;
      // display: flex;
      // justify-content: center;
      // flex-wrap: wrap;
      // background: green;
      // width: 210px;
      // border-radius: 45px;
      .first-link {
        position: relative;
        width: 200px;
        height: 80px;
        background-color: black;
        overflow: hidden;
        border-radius: 40px;
        // background: #ffdbef;
        // overflow: hidden;
        .link {
          position: absolute;
          top: 28px;
          left: 60px;
          width: 100px;
          height: 50px;
          // background: red;
          z-index: 5;
          color: white;
          font-size: 18px;
        }
      }
      .ball {
        position: absolute;
        top: 28px;
        left: -35px;
        width: 25px;
        height: 25px;
        background: white;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }
      a {
        // z-index: 2;
        // padding: 20px 40px;
        // color: white;
        // text-decoration: none;
        // border: 1px solid white;
        // border: 1px solid black;
        // margin: 10px 20px;
        // border-radius: 35px;
        // font-size: 1.2em;
        // transition: background 0.3s ease-in-out;
      }
      a:hover {
        cursor: pointer;
        // background: #ff4a75;
        border: 1px solid #ff4a75;
      }
    }
  }
}

.wave,
.wave::before,
.wave::after {
  width: 100%;
  height: 143px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: url("./../assets/wave.png");
}

.wave {
  animation: animate-reverse 30s linear infinite;
}

.wave::before {
  content: "";
  animation: animate 30s linear infinite;
  opacity: 0.4;
}

.wave::after {
  content: "";
  animation: animate 30s linear infinite;
  animation-delay: 20s;
  opacity: 0.6;
}

@keyframes animate-reverse {
  0% {
    background-position: 1360px;
  }
  100% {
    background-position: 0;
  }
}

@keyframes animate {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1360px;
  }
}
// ----------------------------------
.art-box {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: #ffdbef;
  padding: 30px 0;
  padding-top: 500px;
  transition: all 0.8s ease-in-out;
}
.art-text {
  background: white;
  margin: 40px;
  border-radius: 10px;
  padding: 20px;
  min-height: 300px;
  width: 25%;
}
h3 {
  padding: 20px;
  color: black;
}
p {
  padding: 20px;
  color: black;
  background: none;
  font-size: 1.2em;
}

.portfolio {
  width: 100%;
  padding: 20px 0;
  background: red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .pro {
    width: 30%;
    height: 250px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
