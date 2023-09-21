<template>
  <div class="bg-dark w-full ">
    <NavBar />
    <LandingComp />
    <IdeaComp />
    <RulesComp />
    <JudgeComp />
    <FAQComp />
    <PrizesComp />
    <PartnerComp />
    <PrivacyComp />
    <FooterComp />
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import IdeaComp from "@/components/IdeaComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import RulesComp from '@/components/RulesComp.vue';
import JudgeComp from '@/components/JudgeComp.vue';
import LandingComp from '@/components/LandingComp.vue';
import PrizesComp from "@/components/PrizesComp.vue";
import FAQComp from "@/components/FAQComp.vue";
import PartnerComp from "@/components/PartnerComp.vue";
import PrivacyComp from '@/components/PrivacyComp.vue';

export default {
  name: "LandingPage",
  components: {
    NavBar,
    LandingComp,
    IdeaComp,
    RulesComp,
    JudgeComp,
    FAQComp,
    PrizesComp,
    PartnerComp,
    PrivacyComp,
    FooterComp,

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
/*font-family: 'Montserrat', sans-serif;*/
</style>