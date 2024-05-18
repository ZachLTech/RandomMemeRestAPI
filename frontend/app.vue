<template>
  <section id="hero" class="flex justify-center items-center h-[85vh]">
    <hero />
  </section>
  <section id="demo" class="flex justify-center items-center">
    <div class="divider mx-5 w-[20vw]"></div>
    <div class="mockup-window border bg-base-300 w-[60vw] -translate-y-16">
      <div class="flex px-4 py-8 bg-base-200 h-[40vh]">
        <p class="text-3xl leading-relaxed">
          > 
          <span class="select-text">curl -L https://memeapi.zachl.space/funny/random/html</span>
          <br><br>
          &emsp;&lt;videoORimg controls&gt;<br>
          &emsp;&emsp;&lt;source type="CouldBe/mp4ORpng"&gt;&lt;/source&gt;<br>
          &emsp;&lt;/videoORimg&gt;
        </p>
      </div>
    </div>
    <div class="divider mx-5 w-[20vw]"></div>
  </section>
  <section id="about" class="flex flex-col justify-center items-center gap-24 mt-24 mb-24">
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
</template>