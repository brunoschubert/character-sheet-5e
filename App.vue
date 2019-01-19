<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    isMobile() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
        // window.innerWidth <= 1024
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.isMobile()) {
      this.$router.push("/mobile");
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>