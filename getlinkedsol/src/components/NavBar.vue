<template>
  <!-- <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
    rel="stylesheet"
  /> -->
  <nav class="pt-12 pb-8 flex justify-between px-16">
    <header class="nav-header">
      <span class="text-white m-0 p-0"> get </span>
      <span class="text-pink m-0 p-0"> linked </span>
    </header>

    <div class="nav-links flex text-white text-sm flex-col justify-center">
      <ul class="flex">
        <li class="px-8"><router-link to="/">Timeline</router-link></li>
        <li class="px-8"><router-link to="/"> Overview</router-link></li>
        <li class="px-8"><router-link to="/"> FAQs</router-link></li>
        <li class="px-8"><router-link to="/contact"> Contact</router-link></li>
      </ul>
    </div>

    <ButtonVal> Register </ButtonVal>
  </nav>
</template>

<script>
import ButtonVal from "./ButtonVal.vue";

export default {
  name: "NavBar",
  components: {
    ButtonVal,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.nav-header {
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Clash Display", sans-serif !important;
}
.nav-links {
  font-family: "Montserrat", sans-serif;
}
</style>