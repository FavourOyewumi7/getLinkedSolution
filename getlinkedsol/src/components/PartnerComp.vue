<template>
  <section class="partners-section border-t border-border relative text-white py-16 px-16">
    <div class="radial-color-purple -left-10 -top-8 "></div>
    <div class="radial-color-purple right-0 -bottom-20 "></div>
    <header class="partners-header text-center">
        Partners and Sponsors
    </header>
    <p class="text-center text-sm leading-7">
        Getlinked Hackathon 1.0 is honored to have the following major <br>
        companies as its partners and sponsors
    </p>

    <div class="flex flex-row justify-center my-12">
        <img src="../assets/partnersimg.png" alt="List of Partners" class="justify-center z-10">
    </div>
  </section>
</template>

<script>
export default {
    name:'PartnerComp'
}
</script>

<style scoped>
.partners-header{
    font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.partners-section {
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