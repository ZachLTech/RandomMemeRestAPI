<template>
    <div id="navbar" class="h-[3.6rem] sm:h-16 bg-secondary w-[95vw] sm:w-[60vw] rounded-2xl sm:rounded-full shadow-xl flex justify-between items-center px-3 sm:px-8 overflow-hidden">
      <a href="#hero" class="text-xl sm:text-2xl font-bold">MemeAPI</a>
      <div class="flex gap-3 sm:gap-5 appear">
        <a class="sm:font-bold text-lg hover:text-base-100 transition-all" href="#about" rel="noopener noreferrer">About</a>
        <a class="sm:font-bold text-lg hover:text-base-100 transition-all" href="#docs" rel="noopener noreferrer">Docs</a>
        <a v-if="$device.isDesktop" class="sm:font-bold text-lg hover:text-base-100 transition-all" href="#demo" rel="noopener noreferrer">Demo</a>
        <a class="sm:font-bold text-lg hover:text-base-100 transition-all" href="https://github.com/ZachLTech/RandomMemeRestAPI" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
</template>