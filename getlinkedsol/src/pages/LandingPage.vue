<template>
  <div class="bg-dark w-full ">
    <NavBar />
    <IdeaComp />
    <RulesComp />
    <JudgeComp />
    <FooterComp />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import IdeaComp from "@/components/IdeaComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import RulesComp from '@/components/RulesComp.vue';
import JudgeComp from '@/components/JudgeComp.vue';

export default {
  name: "LandingPage",
  components: {
    NavBar,
    IdeaComp,
    RulesComp,
    JudgeComp,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
/*font-family: 'Montserrat', sans-serif;*/
</style>