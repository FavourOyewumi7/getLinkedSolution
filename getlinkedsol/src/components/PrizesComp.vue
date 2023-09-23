<template>
  <section
    class="prizes-section relative text-white py-16 md:grid md:grid-cols-2 md:text-left flex flex-col text-center px-16 border-t border-border"
  >
    <div class="radial-color-purple left-36 top-0"></div>
    <!-- <div class="radial-color-light -right-36 top-0"></div> -->
    <!-- <div class=""> -->
      <div class="flex flex-col justify-end mt-8">
        <img src="../assets/prizestrophy.png" alt="Trophy" class="z-10" />
      </div>
      <div>
        <header class="prizes-header">
          Prizes and <br />
          <span class="text-pink"> Rewards </span>
        </header>

        <p class="mb-16">
          Highlight of the prizes or rewards for winners and for participants
        </p>
        <img src="../assets/prizes.png" alt="Prizes Description" class="z-10" />
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  name: "PrizesComp",
};
</script>

<style scoped>
.prizes-header {
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.prizes-section {
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

.radial-color-light {
  position: absolute;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(69, 9, 130, 0.44) 18.81%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>