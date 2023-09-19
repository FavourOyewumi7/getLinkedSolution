<template>
  <div>
    <button class="text-white text-sm w-[10.75rem] h-[3.313rem] rounded-sm px-4 py-2">
        <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
    name:'ButtonVal'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
button{
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
}

</style>