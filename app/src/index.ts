import { Elysia } from "elysia";
import { html } from '@elysiajs/html'

const app = new Elysia()
  .use(html())
  .get('/meme/vid/html', () => ({
    <script>
      document.getElementById("media").src = "https://zipline.lopezhome.tech/view/vid-" + Math.floor(Math.random() * 59 + 1) + ".mov"
    </script>
    <video>
      <source id="media" src="" type="video/mov">
    </video>
  }))
  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
