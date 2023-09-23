<template>
  <div class="modal w-full h-full flex justify-center " v-show="this.show">
  <section class="border bg-[#150e28ed] modal-section px-16 pb-8 flex justify-center m-auto border-pink rounded">
    <div>
    <img src="../assets/congratulation.png" alt="">

    <h3 class="text-center font-semibold text-3xl">
        Congratulations <br>
        you have successfully Registered!
    </h3>
    <p class="text-center text-sm font-semibold">
        Yes, it was easy and you did it! <br>
        check your mail box for next step 😜
    </p>
    <router-link to="/">
    <button
      class="text-white text-sm w-full mt-4  h-[3rem] rounded-sm px-4 py-2"
    >
    
      Back
    </button>
  </router-link>
  </div>
  </section>
  </div>
</template>

<script>
export default {
    name: 'ModalComp',
    props:{
      show:Boolean
    },
    created(){
      this.mode = this.show
      console.log(this.mode)
    },
    data(){
      return{
        mode:''
      }
    },
    // methods:{
    //   change(){
    //     this. = !this.mode

    //   }
    // }
}
</script>

<style scoped>
.modal-section{
    font-family: "Montserrat", sans-serif;
    
};
.modal{
  background: rgba(21, 14, 40, 0.93);
}
button {
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
}
</style>