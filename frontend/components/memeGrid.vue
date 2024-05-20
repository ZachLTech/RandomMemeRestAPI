<template>
    <div class="grid grid-cols-7 grid-rows-5 gap-2 sm:gap-4 w-[50vw] h-[75vh]">
      <div class="flex justify-center items-center col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-2xl ">
        <div v-if="loading == true" class="h-full object-cover loading loading-dots w-[3rem] sm:w-28"></div>
        <img v-else :src="data.MemeURL[0]" alt="Sample Meme 1" class="h-full w-full object-cover">
      </div>

      <div class="flex justify-center col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg">
        <div v-if="loading == true" class="h-full object-cover loading loading-dots w-[3rem] sm:w-28"></div>
        <img v-else :src="data.MemeURL[1]" alt="Sample Meme 2" class="h-full w-full object-cover">
      </div>

      <button @click="updateImg()" class="col-span-1 row-span-1 flex items-center justify-center text-3xl text-center z-[5] bg-base-200 rounded-xl shadow-lg sm:hover:bg-base-300 sm:transition-all">
        <p v-if="$device.isDesktop" class="font-bold">Press me</p>
        <p v-if="$device.isMobile" class="font-bold">👆</p>
      </button>

      <div class="flex justify-center col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-lg">
        <div v-if="loading == true" class="h-full object-cover loading loading-dots w-[3rem] sm:w-28"></div>
        <img v-else :src="data.MemeURL[2]" alt="Sample Meme 3" class="h-full w-full object-cover">
      </div>
      
      <div class="flex justify-center col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg">
        <div v-if="loading == true" class="h-full object-cover loading loading-dots w-[3rem] sm:w-28"></div>
        <img v-else :src="data.MemeURL[3]" alt="Sample Meme 4" class="h-full w-full object-cover">
      </div>
    </div>
</template>


<script setup>
  let egg = "This single line of code just has to be here bc 'setup' is equivalent to 'defer' except it applies to all the code and is super weird... anyway this is my fix and Hi to all the devs out there reading this code btw lol"
</script>

<script>
  let loading = ref(false);

  async function newMemes(){
    const result = ref(await $fetch('https://memeapi.zachl.space/pic/json/4'));
    return result.value;
  } let data = await newMemes();

  async function updateImg(){
    loading.value = true;
    data = await newMemes();
    loading.value = false;
  }
</script>