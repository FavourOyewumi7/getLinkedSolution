<template>
  <section class="footer-section bg-footer text-white px-16">
    <div class="grid grid-cols-3 gap-4 py-8">
      <div class="flex flex-col justify-between">
        <div>
          <header class="footer-header pb-4">
            <span class="text-white m-0 p-0"> get </span>
            <span class="text-pink m-0 p-0"> linked </span>
          </header>

          <p class="text-xs leading-">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
        </div>

        <div class="text-xs">
          <span class="border-r-4 border-pink mr-2 pr-1"> Terms of Use </span>
          <span> Privacy Policy </span>
        </div>
      </div>

      <div class="flex flex-row justify-center">
        <div>
          <header class="text-pink pt-4 leading-6 font-semibold">
            Useful links
          </header>
          <ul class="text-xs leading-5">
            <li class="py-2">Overview</li>
            <li class="py-2">Timeline</li>
            <li class="py-2">FAQs</li>
            <li class="py-2">Register</li>
          </ul>

          <div class="flex">
            <div class="flex flex-col justify-end">
              <header class="text-pink pr-2 pt-4 text-xs leading-3">
                Follow Us
              </header>
            </div>
            <ul class="flex flex-row pt-4">
              <li class="pr-2"><img src="../assets/instagram.svg" alt="" /></li>
              <li class="px-2"><img src="../assets/x.svg" alt="" /></li>
              <li class="px-2"><img src="../assets/facebook.svg" alt="" /></li>
              <li class="px-2"><img src="../assets/linkedin.svg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center">
        <div>
          <header class="text-pink pt-4 leading-6 font-semibold">
            Contact Us
          </header>

          <div class="flex pb-8 pt-2">
            <img src="../assets/call.svg" alt="" class="pr-4" />

            <p class="text-xs leading-5">+234 6707653444</p>
          </div>

          <div class="flex">
            <img
              src="../assets/location.svg"
              alt=""
              class="pr-4 flex-col justify-start"
            />

            <p class="text-xs leading-5">
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State <br />
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center py-8">
      <p class="text-xs leading-4">All rights reserved. © getlinked Ltd.</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.footer-header {
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Clash Display", sans-serif !important;
}
.footer-section {
  font-family: "Montserrat", sans-serif;
}
</style>