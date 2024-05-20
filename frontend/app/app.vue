<template>
  <header class="w-full flex justify-center items-center p-2 fixed z-10">
    <navbar />
  </header>
  <div class="flex justify-center items-center pt-[10rem] sm:pt-0 h-[25rem] sm:h-[55rem]">
    <hero id="hero" />
  </div>
  <div id="window" class="flex justify-center items-center  mt-[10rem] sm:mt-0">
    <separator />
  </div>
  <section id="about" class="flex flex-col justify-center items-center gap-16 h-auto">
    <div class="flex flex-col gap-6 sm:gap-5 justify-center items-center">
      <h1 class="text-4xl sm:text-5xl font-bold">Why Use This?</h1>
      <p class="text-xl sm:text-3xl max-w-[900px] px-5 sm:p-0">
        In all honesty, this is more of a joke than a serious 
        project as I'm sure you can tell. I originally just made the
        API to learn ElysiaJS and get the hang of writing some 
        backend API code, but was inspired to make a frontend
        by the amazing <a href="https://capy.lol" target="_blank" class="underline text-accent">Capybara API</a> which I take much inspiration
        from 😃
      </p>
    </div>
    <div class="flex flex-col gap-5 justify-center items-center">
      <div class="flex gap-5">
        <testimonial class="sm:hover:-translate-y-4 transition-all w-[43vw] sm:w-[24vw]" :name="'Amarnath Pate 🐒'" :timeSince="'1 Decade'" :testimonialText="'had me cracking up all night long!!'" :imageSrc="'/images/amarnath.jpg'" />
        <testimonial class="sm:hover:-translate-y-4 transition-all w-[43vw] sm:w-[24vw]" :name="'Thandoid Manlez 🐱'" :timeSince="'5 Seconds'" :testimonialText="'This sure brought laughter into my life!! meow'" :imageSrc="'/images/thandi.png'" />
      </div>
      <h1 class="text-5xl sm:text-9xl opacity-50">Testimonials</h1>
      <testimonial class="sm:hover:-translate-y-4 transition-all w-[86vw] sm:w-[49vw] h-[23rem] sm:h-64" :name="'Jossaya Camel 🐪'" :timeSince="'8 Days'" :testimonialText="'Wowza this API was so great that it saved my entire family from falling apart. Truly amazing and resulted in my company avoiding bankruptcy!! 10/10 would recommend.'" :imageSrc="'/images/jossaya.png'" />
    </div>    
  </section>
  <section id="docs" class="flex flex-col justify-center items-center gap-16">
    <div class="flex flex-col justify-center items-center gap-8">
      <h1 class="text-4xl sm:text-5xl font-bold">Docs & Usage</h1>
      <p class="text-xl sm:text-3xl text-left max-w-[900px] px-5 sm:p-0">
        There are a few endpoints for getting memes using this API to
        provide optimal customization for you, the user!
        <br><br>
        Endpoints ending in `/html` can be copied straight into a
        browsers URL bar and you'll see results
      </p>
    </div>
    <div role="tablist" class="tabs flex sm:grid flex-col items-center tabs-lifted self-center mr-0 w-[86vw] sm:w-[49vw] shadow-xl rounded-xl bg-base-300 p-2">
      <!-- These could've been components but like eh whatever-->
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/random/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw] rounded-tl-box sm:rounded-tl-none"><a href="https://memeapi.zachl.space/random/html" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Provides a meme that might be either a video or photo and returns HTML to serve your funny content</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/random/json" checked />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]"><a href="https://memeapi.zachl.space/random/json" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Provides a meme just as the previous endpoint, except this returns JSON format providing the direct URL to your randomized meme</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/vid/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]"><a href="https://memeapi.zachl.space/vid/html" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Returns a funny video in HTML format to serve content immediately</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/vid/json" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]"><a href="https://memeapi.zachl.space/vid/json" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Returns a funny video in JSON format for parsing direct video URL</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/pic/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]"><a href="https://memeapi.zachl.space/pic/html" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Returns a funny picture in HTML format to serve content immediately</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/pic/json" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]"><a href="https://memeapi.zachl.space/pic/json" target="_blank" rel="noopener noreferrer" class="underline font-bold text-[#92BA5E]">Try It!</a> Returns a funny picture in JSON format for parsing direct image URL</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="-/json/x" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[250px] sm:h-[110px] w-[81vw] sm:w-[48vw]">'-' can be either "random", "pic", or "vid" depending on what you want, and this endpoint will return JSON containing an array of X amount of meme URLs</div>
    </div>
  </section>
  <section v-if="$device.isDesktop" id="demo" class="flex flex-col gap-8 justify-center items-center">
    <h1 class="text-5xl font-bold">Picture Demo</h1>
    <memeGrid />
  </section>
  <section id="disclaimer" class="flex justify-center items-center flex-col gap-8">
    <details class="transition-all delay-75">
      <summary class="text-4xl sm:text-5xl font-bold text-primary transition-all">Disclaimer</summary>
      <div class="flex flex-col justify-center items-center w-[86vw] sm:w-[49vw] rounded-lg shadow-lg bg-base-200 px-8 py-6 sm:py-12">
        <p class="text-xl sm:text-3xl text-left max-w-[900px]">
          &emsp;&emsp;The memes displayed here are solely for entertainment
          purposes. None of the content should be taken seriously,
          and I do not agree with or endorse the messages conveyed
          by the memes. This project is created purely for fun, and
          the memes are sourced from various friends and external sources.
          <br><br>
          &emsp;&emsp;While I strive to ensure the content is lighthearted and
          enjoyable, there's a possibility that some memes may be
          distasteful or offensive inadvertently. If you come across
          any content that is inappropriate or offensive, please let
          me know, and I will take appropriate action.
        </p>
        <p class="text-3xl text-center font-bold max-w-[900px] mt-8">Thank you for understanding.</p>
      </div>

    </details>
  </section>
  <footer id="footer" class="flex flex-col gap-5 justify-center items-center mb-[1rem] sm:mb-[2rem]">
    <div class="divider px-5"></div>
    <p class="text-2xl sm:text-3xl font-bold">Made with ❤️ by <a class="underline bg-gradient-to-r from-green-400 to-green-700 inline-block text-transparent bg-clip-text" href="https://zachl.space" target="_blank">Zach</a></p>
  </footer>
</template>

<style>
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #hero {  
    animation: 1s ease-in-out 0s 1 appear;
  }
</style>