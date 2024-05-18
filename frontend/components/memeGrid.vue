<template>
    <div class="grid grid-cols-7 grid-rows-5 gap-4 w-[50vw] h-[75vh]">
      <div class="col-span-3 row-span-3 border-transparent rounded-2xl overflow-hidden shadow-2xl">
        <img :src="`${ imgTL }`" alt="Meme 1" class="h-full w-full object-cover">
      </div>
      <div class="col-span-4 row-span-2 border-transparent rounded-2xl overflow-hidden shadow-lg">
        <img :src="`${ imgTR }`" alt="Meme 2" class="h-full w-full object-cover">
      </div>
      <div class="col-span-1 row-span-1 flex items-center justify-center text-3xl text-center">
        <p>Some Memes</p>
      </div>
      <div class="col-span-3 row-span-3 border-transparent rounded-2xl overflow-hidden shadow-lg">
        <img :src="`${ imgBR }`" alt="Meme 3" class="h-full w-full object-cover">
      </div>
      <div class="col-span-4 row-span-2 border-transparent rounded-2xl overflow-hidden shadow-lg">
        <img :src="`${ imgBL }`" alt="Meme 4" class="h-full w-full object-cover">
      </div>
    </div>
</template>

<script>
    export default {
        props: [
            'imgTL',
            'imgTR',
            'imgBL',
            'imgBR',
        ],
    }
</script>