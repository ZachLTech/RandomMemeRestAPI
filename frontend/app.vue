<template>
  <section id="hero" class="flex justify-center items-center h-[85vh]">
    <hero />
  </section>
  <div id="demo" class="flex justify-center items-center">
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
  </div>
  <section id="about" class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-5xl font-bold">Why Use This?</h1>
    <p class="text-3xl max-w-[900px]">
      Well in all honesty, this is more of a joke than a serious 
      project as I'm sure you can tell. I originally just made the
      API to learn ElysiaJS and get the hang of writing some 
      backend API code, but was inspired to make a frontend
      by the amazing <a href="https://capy.lol" target="_blank" class="underline text-accent">Capybara API</a> which I take much inspiration
      from 😃
    </p>
    <div class="flex gap-5">
      <testimonial />
      <testimonial />
    </div>
    <h1 class="text-7xl opacity-50">Testimonials</h1>
    <testimonial />
  </section>
</template>