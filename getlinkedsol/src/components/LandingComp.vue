<template>
  <section
    class="landing-section relative text-white px-8  md:px-0 md:pl-16 border-t border-border pt-12"
  >
  <div class="radial-color-purple left-36 top-0"></div>
    <div class="flex flex-row sm:justify-end md:pr-24">
      <div>
        <h2 class="landing-text md:text-4xl sm:text-2xl italic md:font-extrabold mb-2 text-sm font-bold z-10">
          Igniting a Revolution in HR Innovation
        </h2>
        <div class="flex flex-row justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sm:w-[255px] [h-17px] w-36 "
            viewBox="0 0 255 17"
            fill="none"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 flex flex-col">
      <div class="z-10 md:block flex flex-col items-center">
        <img src="../assets/landingimg.png" alt=" getlinked Tech Hackathon" class="md:pr-0 " />
        <p class="md:text-xl md:text-left text-sm leading-8 mb-8 text-center">
          Participate in getlinked tech Hackathon 2023 stand
          a chance to win a Big prize
        </p>
        <ButtonVal>Register</ButtonVal>

        <p class="text-white mt-12">
          <span class="time ">{{ this.h }} </span>H
          <span class="time pl-5"> {{ this.m }} </span>M
          <span class="time pl-5">{{ this.s }}</span> S
        </p>
      </div>

      <div class="relative">
        <div class="relative">
          <img
            src="../assets/landingmain-img.png"
            alt="boy holding out his hand"
            class=""
          />
          <img
            src="../assets/landing-star.png"
            alt="stars"
            class="absolute inset-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVal from "@/components/ButtonVal.vue";
export default {
  name: "LandingComp",
  components: {
    ButtonVal,
  },
  data() {
    return {
      h: "00",
      m: "00",
      s: "00",
    };
  },
  created() {
    this.timer();
  },
  methods: {
    timer() {
      let countDownDate = new Date("Sep 25, 2023 00:20:25").getTime();

      setInterval(() => {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        this.h = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.s = Math.floor((distance % (1000 * 60)) / 1000);

       
      },1000)
        
    },
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
.landing-section {
  font-family: "Montserrat", sans-serif;
}
.landing-text {
  line-height: 2.743rem;
}
.time {
  font-family: "Unica One", cursive;

  font-size: 64px;
  font-weight: 400;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: left;
}
.radial-color-purple {
  position: absolute;
  
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
}


</style>