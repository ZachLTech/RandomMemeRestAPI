<template>
  <div id="hero" class="flex justify-center items-center h-[85vh]">
    <hero />
  </div>
  <section id="demo" class="flex justify-center items-center">
    <separator />
  </section>
  <section id="about" class="flex flex-col justify-center items-center gap-24 h-auto">
    <div class="flex flex-col gap-5 justify-center items-center">
      <h1 class="text-5xl font-bold">Why Use This?</h1>
      <p class="text-3xl max-w-[900px]">
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
        <testimonial :width="'24vw'" :name="'Amarnath Pate 🐒'" :timeSince="'1 Decade'" :testimonialText="'had me cracking up all night long!!'" :imageSrc="'/images/amarnath.jpg'" />
        <testimonial :width="'24vw'" :name="'Thandoid Manlez 🐱'" :timeSince="'5 Seconds'" :testimonialText="'whew! This brought some good laughter into my life!! meow'" :imageSrc="'/images/thandi.png'" />
      </div>
      <h1 class="text-9xl opacity-50">Testimonials</h1>
      <testimonial :width="'49vw'" :name="'Jossaya Camel 🐪'" :timeSince="'8 Days'" :testimonialText="'Wowza this API was so great that it saved my entire family from falling apart. Truly amazing and resulted in my company avoiding bankruptcy!! 10/10 would recommend.'" :imageSrc="'/images/jossaya.png'" />
    </div>    
  </section>
  <section id="docs" class="flex flex-col justify-center items-center gap-20">
    <div class="flex flex-col justify-center items-center gap-8">
      <h1 class="text-5xl font-bold">Docs & Usage</h1>
      <p class="text-3xl text-left max-w-[900px]">
        There are a few endpoints for getting memes using this API to
        provide optimal customization for you, the user!
        <br><br>
        Endpoints ending in `/html` can be copied straight into a
        browsers URL bar and you'll see results
      </p>
    </div>
    <div role="tablist" class="tabs tabs-lifted self-center mr-0 w-[49vw] shadow-xl rounded-xl bg-base-300 p-2">
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/random/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[110px]">Provides a meme that might be either a video or photo and returns HTML to serve your funny content</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/random/json" checked />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 rounded-box px-4 py-6 text-xl h-[110px]">Provides a meme just as the previous endpoint, except this returns JSON format providing the direct URL to your randomized meme</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/vid/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[110px]">Returns a funny video in HTML format to serve content immediately</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/vid/json" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[110px]">Returns a funny video in JSON format for parsing direct video URL</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/pic/html" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[110px]">Returns a funny picture in HTML format to serve content immediately</div>
      <input type="radio" name="my_tabs_2" role="tab" class="tab text-md" aria-label="/pic/json" />
      <div role="tabpanel" class="tab-content bg-base-200 border-base-300 border-none rounded-box px-4 py-6 text-xl h-[110px]">Returns a funny picture in JSON format for parsing direct image URL</div>
    </div>
  </section>
  <section class="flex justify-center items-center">
    <memeGrid :imgTL="" :imgTR="" :imgBL="" :imgBR="" />
  </section>
</template>
<script>
  const memeArr = [] // Gonna implement where it gets as many as u want & returns json
</script>