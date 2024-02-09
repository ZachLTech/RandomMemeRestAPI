import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia()

    .get('/funny/random/json', ({set}) => {
      ((!!(Math.random() * 2 | 0))) ? set.redirect = '/funny/pic/json':set.redirect = '/funny/vid/json'; // Random Bool to redirect- 1 line :D
    })
    .get('/funny/random/html', ({set}) => {
      ((!!(Math.random() * 2 | 0))) ? set.redirect = '/funny/pic/html':set.redirect = '/funny/vid/html';
    }) 

    .get('/funny/pic/json', () => {

      let link = "https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;
    })
    .get('/funny/vid/json', () => {

      let link = "https://zipline.lopezhome.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;

    })
    
    .use(html())
    
    .get('/funny/pic/html', () => `
              <img id="media" src=""></img>
              <script defer>
                let media = document.getElementById("media");
                let link = "https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
                media.setAttribute('src', link);
              </script>
    `)
    .get('/funny/vid/html', () => `
            <video controls>
              <source id="media" src="" type="video/mp4"></source>
            </video>
            <script defer>
              let media = document.getElementById("media");
              let link = "https://zipline.lopezhome.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false";
              media.setAttribute('src', link);
            </script>
            
    `)
    .listen(3000);

console.log(
  `😂 Memes running at ${app.server?.hostname}:${app.server?.port}`
);

