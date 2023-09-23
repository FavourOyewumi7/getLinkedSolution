<template>
  <!-- <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  /> -->
  <div
    class="idea-section text-white gap-8 md:grid md:grid-cols-2 flex flex-col md:text-left text-center py-12 md:px-36 px-12 border-t border-border"
  >
    <div>
      <img src="../assets/idea.png" alt="Big Idea Image" />

      
        
    </div>
    <div class="flex flex-col justify-center">
      <header class="idea-header">
        Introduction to getlinked <br />
        <span class="text-pink"> tech Hackathon 1.0 </span>
      </header>

      <p class="pt-4 leading-7 text-sm md:text-left text-center">
        Our tech hackathon is a melting pot of visionaries, and its purpose is 
        as clear as day: to shape the future. Whether you're a coding genius, a
        design maverick, or a concept wizard, you'll have the chance to
        transform your ideas into reality. Solving real-world problems, pushing
        the boundaries of technology, and creating solutions that can change the
        world, that's what we're all about!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaComp",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.idea-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.idea-section {
  font-family: "Montserrat", sans-serif;
}
</style>