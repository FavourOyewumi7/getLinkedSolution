<template>

  <main class="register-section bg-dark w-full h-full text-white relative">
    <ModalComp  class="z-10 absolute modal" :show="this.modal_show"/>
    <NavBar />
    
    

    <section class="pt-20 grid grid-cols-2 pr-16">
      <div>
        <img src="../assets/registerimage.png" alt="Registration SVG" />
      </div>

      <div>
        <div
          class="shadow-lg rounded-lg bg-card-dark pb-16 pt-12 flex flex-row justify-center"
        >
          <div class="w-5/6">
            <h3 class="register-header text-pink text-left mb-8">Register</h3>

            <p class="text-sm pb-4">
              Be part of this movement
              <span
                class="px-4 decoration-pink decoration-dotted underline transform -scale-x-100 scale-y-100"
                >🚶🚶‍♂️</span
              >
            </p>
            <h3 class="pb-8 text-2xl">CREATE YOUR ACCOUNT</h3>

            <form
              action=""
              class=""
              @submit.prevent="this.submitRegistration()"
            >
              <div class="flex flex-row justify-between">
                <span class="flex flex-col">
                  <label for="name">Team's Name</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    v-model="name"
                    placeholder="Enter the name of your group"
                    class="w-[16.438rem] h-[2.938rem] shadow shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs"
                  />
                </span>

                <span class="flex flex-col">
                  <label for="Phone">Phone</label>
                  <input
                    type="text"
                    name="Phone"
                    id=""
                    v-model="phone"
                    placeholder="Enter your phone number"
                    class="w-[16.438rem] h-[2.938rem] shadow shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs"
                  />
                </span>
              </div>

              <div class="flex flex-row justify-between">
                <span class="flex flex-col">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    name="Email"
                    id=""
                    v-model="email"
                    placeholder="Enter your email address"
                    class="w-[16.438rem] h-[2.938rem] shadow shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs pt-0"
                  />
                </span>

                <span class="flex flex-col">
                  <label for="Project Topic">Project Topic</label>
                  <input
                    type="text"
                    name="Project Topic"
                    id=""
                    v-model="topic"
                    placeholder="What is your group project topic"
                    class="w-[16.438rem] h-[2.938rem] shadow shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white placeholder:pl-2 placeholder:text-xs pt-0"
                  />
                </span>
              </div>

              <div class="flex flex-row justify-between">
                <span class="flex flex-col">
                  <label for="Category">Category</label>
                  <select
                    name="category"
                    id=""
                    v-model="category_val"
                    class="w-[16.438rem] h-[2.938rem] shadow bg-[#ffffff08] shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white pl-2 text-xs pt-0 pr-2"
                  >
                    <option value="" selected disabled>
                      Select your category
                    </option>
                    <option
                      v-for="category in this.categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </span>

                <span class="flex flex-col">
                  <label for="Group Size">Group Size</label>
                  <select
                    name="group size"
                    id=""
                    v-model="group_size"
                    class="w-[16.438rem] h-[2.938rem] shadow bg-[#ffffff08] shadow-[#00000040] rounded my-4 bg-card-dark border border-1 border-white pl-2 text-xs pt-0 pr-2"
                  >
                    <option value="" selected disabled class="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </span>
              </div>
              <p class="italic text-xs text-pink-j py-2">
                Please review your registration details before submitting
              </p>

              <input
                type="checkbox"
                name="agreement"
                id=""
                class="bg-dark"
                v-model="this.policy"
                @click="!this.policy"
              />
              <label for="agreement" class="text-xs pl-2"
                >I agreed with the event terms and conditions and privacy
                policy</label
              >
              <div class="flex flex-row justify-center my-4">
                <ButtonVal :disabled="!this.policy"> Submit </ButtonVal>
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
import ModalComp from "@/components/ModalComp.vue";
export default {
  name: "RegisterPage",
  components: {
    NavBar,
    ButtonVal,
    ModalComp
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      topic: "",
      category_val: "",
      group_size: "",
      categories: "",
      policy: false,
      modal_show:false
    };
  },

  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        fetch(
          "https://backend.getlinked.ai/hackathon/categories-list",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => (this.categories = result));
      } catch (err) {
        alert(err);
      }
    },

    submitRegistration() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      if (this.policy == false) {
        alert("Please agree to the agreement");
      }

      var raw = JSON.stringify({
        email: this.email,
        phone_number: this.phone,
        team_name: this.name,
        group_size: this.group_size,
        project_topic: this.topic,
        category: this.category_val,
        privacy_poclicy_accepted: this.policy,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        requestOptions
      )
        .then((response) => 
        console.log(response.status, response.text()),
        this.modal_show = true)
        
        .catch((error) => console.log("error", error));
    },
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
.modal{
  background: rgba(21, 14, 40, 0.93);
}
</style>