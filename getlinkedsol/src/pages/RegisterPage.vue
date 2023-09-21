<template>
  <main class="register-section bg-dark w-full h-full  text-white">
    <NavBar />

    <section class="pt-20 grid  grid-cols-2 pr-16 ">
      <div>
        <img src="../assets/registerimage.png" alt="Registration SVG" />
      </div>

      <div>
        <div
          class="shadow-lg rounded-lg bg-card-dark    pb-16 pt-12 flex flex-row justify-center"
        >
          <div class="w-5/6">
            <h3 class="register-header text-pink text-left pb-2">Register</h3>

            <p class="text-sm">
              Be part of this movement
              <span
                class="px-4 decoration-pink decoration-dotted underline transform -scale-x-100 scale-y-100"
                >🚶🚶‍♂️</span
              >
            </p>
            <h3 class="pb-4 text-2xl">CREATE YOUR ACCOUNT</h3>

            <form action="" class="">
              <div class="flex flex-row justify-between">
                <span class="flex flex-col">
                  <label for="name">Team's Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the name of your group"
                    class="w-[16.438rem] h-[2.938rem] shadow-inner  shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs"
                  />
                </span>

                <span class="flex flex-col">
                  <label for="Phone">Phone</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your phone number"
                    class="w-[16.438rem] h-[2.938rem] shadow-inner  shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs "
                  />
                </span>
              </div>

              <div class="flex flex-row justify-between">
                <span class="flex flex-col ">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    class="w-[16.438rem] h-[2.938rem] shadow-inner  shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs pt-0"
                  />
                </span>

                <span class="flex flex-col">
                  <label for="Project Topic">Project Topic</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="What is your group project topic"
                    class="w-[16.438rem] h-[2.938rem] shadow-inner  shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs pt-0"
                  />
                </span>
              </div>

              <div class="flex flex-row justify-between">
                <span class="flex flex-col">
                  <label for="Category">Category</label>
                  <select
                    name="category"
                    id=""
                    class="w-[16.438rem] h-[2.938rem] shadow-inner bg-[#ffffff08] shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white pl-2 text-xs pt-0 pr-2"
                  >
                  <option value="" selected disabled>Select your category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </span>

                <span class="flex flex-col">
                  <label for="Group Size">Group Size</label>
                  <select
                    name="group size"
                    id=""
                    class="w-[16.438rem] h-[2.938rem] shadow-inner bg-[#ffffff08] shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white pl-2 text-xs pt-0 pr-2"
                  >
                  <option value="" selected disabled class="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </span>
              </div>
              <p class="italic text-xs text-pink-j">
                Please review your registration details before submitting
              </p>

              <input type="checkbox" name="" id="" />
              <label for=""
                >I agreed with the event terms and conditions and privacy
                policy</label
              >
              <div class="flex flex-row justify-center my-4">
                <ButtonVal> Submit </ButtonVal>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ButtonVal from "@/components/ButtonVal.vue";
export default {
  name: "RegisterPage",
  components: {
    NavBar,
    ButtonVal,
  },
};
</script>

<style scoped>
.register-header {
  font-family: Clash Display;
  font-size: 32px;
  font-weight: 600;
  line-height: 39.63px;
  letter-spacing: 0em;
}
.register-section {
  font-family: "Montserrat", sans-serif;
}
</style>