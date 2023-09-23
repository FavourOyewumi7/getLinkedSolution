<template>
  <!-- <link
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap"
    rel="stylesheet"
  /> -->
  <div class="bg-dark w-full h-full ">
    <NavBar class="hidden sm:block"/>
    <div class="sm:px-36 sm:pt-20 grid gap-4 sm:grid-cols-2 h-screen">
      <section class="pt-16 text-left contact-section text-white hidden sm:block">
        <div class="">
          <h3 class="contact-header text-pink text-left">Get in touch</h3>

          <p class="py-4">
            Contact <br />
            Information
          </p>

          <p class="pb-4">
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>

          <p class="pb-4">Call Us : 07067981819</p>

          <p class="pb-4">
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>

          <h5 class="text-pink pt-4 leading-5">Share on</h5>
          <ul class="flex flex-row pt-4">
            <li class="pr-4"><img src="../assets/instagram.svg" alt="" /></li>
            <li class="px-4"><img src="../assets/x.svg" alt="" /></li>
            <li class="px-4"><img src="../assets/facebook.svg" alt="" /></li>
            <li class="px-4"><img src="../assets/linkedin.svg" alt="" /></li>
          </ul>
        </div>
      </section>
      <div @click="$router.back()" class="block sm:hidden pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)"/>
          <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white"/>
          <defs>
          <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
          <stop stop-color="#903AFF"/>
          <stop offset="1" stop-color="#FF26B9"/>
          </linearGradient>
          </defs>
          </svg>
      </div>
      <section class="">
        <div
          class="shadow-lg rounded-lg bg-card-dark px-16 pb-16 sm:pt-12 flex flex-row justify-center"
        >
          <div class="">
            <h3 class="contact-header-1 text-pink text-left pb-2">
              Questions or need assistance
            </h3>

            <h3 class="contact-header-1 text-pink text-left pb-4">
              Let us know about it?
            </h3>

            <form action="" class="" @submit="this.submitContact()">
              <input
                type="text"
                name="name"
                id=""
                v-model="name"
                placeholder="First Name"
                class="md:w-[16.438rem] w-[13.2rem] h-[2.938rem] rounded my-4 bg-card-dark border border-1 border-white text-white pl-8"
              />

              <input
                type="text"
                name="name"
                id=""
                v-model="name"
                placeholder="Topic"
                class="sm:hidden block md:w-[16.438rem] w-[13.2rem] h-[2.938rem] rounded my-4 bg-card-dark border border-1 border-white text-white pl-8"
              />

              <input
                type="email"
                name="email"
                id=""
                v-model="email"
                placeholder="Mail"
                class="md:w-[16.438rem] w-[13.2rem] h-[2.938rem] rounded my-4 bg-card-dark border border-1 border-white  text-white pl-8"
              />

              <input
                type="text"
                name="message"
                id=""
                v-model="message"
                placeholder="Message"
                class="md:w-[27.313rem] w-[13.2rem] h-[7.438rem] rounded my-4 bg-card-dark border border-1 border-white  pt-0 text-white pl-4"
              />
              <div class="flex flex-row justify-center my-4">
                <ButtonVal> Submit </ButtonVal>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ButtonVal from "@/components/ButtonVal.vue";
export default {
  name: "ContactPage",
  components: {
    NavBar,
    ButtonVal,
  },
  data(){
    return{
      name:"",
      email:"",
      message:"",

    }
  },
  methods:{
    submitContact(){
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": this.email,
  "phone_number": "0903322445533",
  "first_name": this.name,
  "message": this.message
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.contact-section {
  font-family: "Montserrat", sans-serif;
}
.contact-header {
  font-family: Clash Display;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
}
.contact-header-1 {
  font-family: Clash Display;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
}
</style>