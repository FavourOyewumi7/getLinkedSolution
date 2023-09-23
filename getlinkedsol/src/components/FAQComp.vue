<template>
  <section class="faq-section text-white py-36 px-36 border-t border-border grid grid-cols-2">
    <div>
      <header class="faq-header">
        Frequently Ask

        <br />
        <span class="text-pink"> Question </span>
      </header>

      <p class="text-sm mt-8">
        We got answers to the questions that you might <br>
want to ask about getlinked Hackathon 1.0
      </p>


      <section class="mt-12">
        <div class="border-b border-pink py-2 pt-4 flex justify-between">
          <span class="text-sm">Can I work on a project I started before the hackathon?</span>
          <span class="text-pink">+</span>
        </div>
        <div class="border-b border-pink py-2 pt-4 flex justify-between">
          <span class="text-sm">What happens if I need help during the hackathon?</span>
          <span class="text-pink">+</span>
        </div>
        <div class="border-b border-pink py-2 pt-4 flex justify-between ">
          <span class="text-sm">What happens if I don't have an idea for a project?</span>
          <span class="text-pink">+</span>
        </div>
        <div class="border-b border-pink py-2 pt-4 flex justify-between">
          <span class="text-sm">Can I join a team or do I have to come with one?</span>
          <span class="text-pink">+</span>
        </div>
        <div class="border-b border-pink py-2 pt-4 flex justify-between">
          <span class="text-sm">What happens after the hackathon ends</span>
          <span class="text-pink">+</span>
        </div>
        <div class="border-b border-pink py-2 pt-4 flex justify-between">
          <span class="text-sm" >Can I work on a project I started before the hackathon?</span>
          <span class="text-pink">+</span>
        </div>
      </section>
    </div>

    <div class=" ">
      <div class="w-4/5 flex justify-between relative">
      <span class="questions-1 px-8">?</span>
      <span class="questions-2 px-8 absolute -top-12 inset-x-1/3 ">?</span>
      <span class="questions-1 px-8">?</span>
    </div>
      <img src="../assets/faq.png" alt="faq-image" class="mt-0">
    </div>
  </section>
</template>

<script>
export default {
    name:'FAQComp'
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/made-tommy-outline');
.faq-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.faq-section {
  font-family: "Montserrat", sans-serif;
}
.questions-1{
  color: #A866FD;
font-family: 'MADE TOMMY Outline', sans-serif;
font-size: 96px;
font-style: normal;
font-weight: 500;
line-height: 27.5px;
}
.questions-2{
  color: #D434FE;
font-family: 'MADE TOMMY Outline', sans-serif;
font-size: 128px;
font-style: normal;
font-weight: 500;
line-height: 27.5px;
}
</style>