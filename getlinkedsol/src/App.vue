<template>
  <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
</style>
