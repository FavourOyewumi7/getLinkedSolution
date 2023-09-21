<template>
  <section
    class="landing-section text-white pl-16 border-t border-border pt-12"
  >
    <div class="flex flex-row justify-end pr-24">
      <div>
        <h2 class="landing-text text-4xl italic font-extrabold mb-2">
          Igniting a Revolution in HR Innovation
        </h2>
        <div class="flex flex-row justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="17"
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
    <div class="grid grid-cols-2">
      <div class="">
        <img src="../assets/landingimg.png" alt=" getlinked Tech Hackathon" />
        <p class="text-xl leading-8 mb-8">
          Participate in getlinked tech Hackathon 2023 stand <br />
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
      let countDownDate = new Date("Sep 21, 2023 20:20:25").getTime();

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
</style>