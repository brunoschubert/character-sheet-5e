import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import HomeMobile from "./components/HomeMobile";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        hasMobileView: true
      }
    },
    {
      path: "/mobile",
      name: "homeMobile",
      component: HomeMobile,
      meta: {
        hasDesktopView: true
      }
    }
  ]
});
