<template>
  <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  />
  <div
    class="idea-section text-white grid grid-cols-2 py-12 px-36 border-t border-border"
  >
    <div class="flex flex-col justify-center">
      <header class="idea-header">
        Rules and<br />
        <span class="text-pink"> Guidelines </span>
      </header>

      <p class="pt-4 leading-7 text-sm">
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
  
  <style>
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
</style>