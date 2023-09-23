<template>
  <!-- <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  /> -->
  <div
    class="rules-section relative text-white grid grid-cols-2 py-12 px-36 border-t border-border"
  >
  <div class="radial-color-purple "></div>
    <div class="flex flex-col justify-center">
      <header class="idea-header z-10">
        Rules and<br />
        <span class="text-pink"> Guidelines </span>
      </header>

      <p class="pt-4 leading-7 text-sm z-10">
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        <br />
        as clear as day: to shape the future. Whether you're a coding genius,
        a<br />
        design maverick, or a concept wizard, you'll have the chance to<br />
        transform your ideas into reality. Solving real-world problems,
        pushing<br />
        the boundaries of technology, and creating solutions that can change
        the<br />
        world, that's what we're all about!
      </p>
    </div>
    <div>
      <img src="../assets/rulesimg.png" alt="Rules Image" />
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "RulesComp",
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.rules-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.rules-section {
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