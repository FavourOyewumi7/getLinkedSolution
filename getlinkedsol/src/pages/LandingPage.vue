<template>
  <div class="bg-dark w-full ">
    <NavBar />
    <IdeaComp />
    <RulesComp />
    <FooterComp />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import IdeaComp from "@/components/IdeaComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import RulesComp from '@/components/RulesComp.vue';

export default {
  name: "LandingPage",
  components: {
    NavBar,
    IdeaComp,
    RulesComp,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
/*font-family: 'Montserrat', sans-serif;*/
</style>