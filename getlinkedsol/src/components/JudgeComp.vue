<template>
  <!-- <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  /> -->
  <div
    class="judge-section text-white grid grid-cols-2 py-12 px-36 relative border-t border-border"
  >
    <div class="radial-color-purple -bottom-20"></div>
    <div class="radial-color-purple -bottom-64 right-0"></div>
    <div class="flex flex-col justify-center">
      <img src="../assets/judgingimg.png" alt="Big Idea Image" class="z-10" />
    </div>
    <div class="z-10">
      <header class="judge-header">
        Judging Criteria <br />
        <span class="text-pink"> Key attributes </span>
      </header>

      <p class="pt-4 leading-7 text-sm">
        <span class="text-pink-j"> Innovation and Creativity </span>: Evaluate
        the uniqueness and creativity of the solution. Consider whether it
        addresses a real-world problem in a novel way or introduces innovative
        features.
      </p>
      <p class="pt-4 leading-7 text-sm">
        <span class="text-pink-j">Functionality </span>: Assess how well the
        solution works. Does it perform its intended functions effectively and
        without major issues? Judges would consider the completeness and
        robustness of the solution.
      </p>
      <p class="pt-4 leading-7 text-sm">
        <span class="text-pink-j">Impact and Relevance </span>: Determine the
        potential impact of the solution in the real world. Does it address a
        significant problem, and is it relevant to the target audience? Judges
        would assess the potential social, economic, or environmental benefits.
      </p>
      <p class="pt-4 leading-7 text-sm">
        <span class="text-pink-j">Technical Complexity </span>: Evaluate the
        technical sophistication of the solution. Judges would consider the
        complexity of the code, the use of advanced technologies or algorithms,
        and the scalability of the solution.
      </p>
      <p class="pt-4 leading-7 text-sm">
        <span class="text-pink-j">Adherence to Hackathon Rules</span>: Judges
        will Ensure that the team adhered to the rules and guidelines of the
        hackathon, including deadlines, use of specific technologies or APIs,
        and any other competition-specific requirements.
      </p>

      <ButtonVal class="mt-8"> Read More </ButtonVal>
    </div>
  </div>
</template>

<script>
import ButtonVal from "@/components/ButtonVal.vue";
export default {
  name: "JudgeComp",
  components: {
    ButtonVal,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.judge-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.judge-section {
  font-family: "Montserrat", sans-serif;
}
.radial-color-purple {
  position: absolute;
  z-index: 10;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(113, 7, 219, 0.44) 18.81%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>