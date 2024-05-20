<template>
    <div class="mockup-window bg-base-300 w-[86vw] sm:w-[60vw] sm:-translate-y-16 shadow-xl">
      <div class="flex sm:px-4 sm:py-8 bg-base-200 h-[25rem] sm:h-[30rem]">
        <memeGrid class="w-full h-full p-4" v-if="$device.isMobile" :imgTL="'https://picsum.photos/803/603'" :imgTR="'https://picsum.photos/802/602'" :imgBL="'https://picsum.photos/801/601'" :imgBR="'https://picsum.photos/800/600'" />
        <p v-if="$device.isDesktop" class="text-xl sm:text-3xl sm:leading-relaxed">
          > 
          <span class="select-text">curl -L https://memeapi.zachl.space/funny/random/html</span>
          <br><br>
          &emsp;&lt;videoORimg controls&gt;<br>
          &emsp;&emsp;&lt;source type="CouldBe/mp4ORpng"&gt;&lt;/source&gt;<br>
          &emsp;&lt;/videoORimg&gt;
        </p>
      </div>
    </div>
</template>