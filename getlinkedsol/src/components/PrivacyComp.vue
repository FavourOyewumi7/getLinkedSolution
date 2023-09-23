<template>
  <section class="privacy-section text-white py-16 my-16 relative gap-8  md:pl-16 text-center md:text-left  border-t border-border flex flex-col md:grid md:grid-cols-2">
    <div class="radial-color-purple -bottom-36 -left-48 "></div>
    <div>
      <header class="privacy-header">
        Privacy Policy and
        <br />
        <span class="text-pink"> Terms </span>
      </header>

      <p class="text-sm text-[#ffffffbf] py-4">Last updated on September 12, 2023</p>
      <p class="text-sm pt-4 pb-12">
        Below are our privacy & policy, which outline a lot of goodies. <br> it’s our
        aim to always take of our participant
      </p>

      <div class="p-16 priv-div border-pink rounded border">
        <p class="leading-7 text-sm">
          At getlinked tech Hackathon 1.0, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you participate in our tech hackathon event. By participating in our
          event, you consent to the practices described in this policy.
        </p>

        <h3 class="pt-8 pb-4 text-pink font-bold leading-7">Licensing Policy</h3>
        <h6 class="font-bold text-sm">Here are terms of our Standard License:</h6>
        <div class="flex flex-row my-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              class="mt-2"
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
              <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
            </svg>
          </span>
          <span class="text-sm leading-7 pl-4">
            The Standard License grants you a non-exclusive right to navigate
            and register for our event
          </span>
        </div>

        <div class="flex flex-row my-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              class="mt-2"
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
              <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
            </svg>
          </span>
          <span class="text-sm leading-7 pl-4">
            You are licensed to use the item available at any free source sites,
            for your project development
          </span>
        </div>
        <ButtonVal>Read More</ButtonVal>
        
      </div>
    </div>

    <div class="bg-privacy bg-no-repeat relative h-full w-full">
      
      <img src="../assets/privacyimg.png" alt="" class="absolute inset-x-0 bottom-0">
      
    </div>
  </section>
</template>

<script>
import ButtonVal from './ButtonVal.vue';
export default {
  name: "PrivacyComp",
  components:{
    ButtonVal
  }
};
</script>

<style scoped>

.privacy-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.privacy-section {
  font-family: "Montserrat", sans-serif;
}
.priv-div{
 
  background: rgba(217, 217, 217, 0.03);
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
@media screen and (max-width: 1100px) and (min-width:600px) {
  .radial-color-purple{
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 600px) {
  .radial-color-purple{
    width: 200px;
    height: 200px;
  }
  .privacy-header {
    font-family: Clash Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
}
</style>