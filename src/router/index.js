import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Photos from "../views/Photos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
