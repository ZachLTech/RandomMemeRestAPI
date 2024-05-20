import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    //CORS
    .use(cors({
      origin: /.memeapi\.zachl\.space$/
    }))

    .get('/', () => { // Message for Root
      let json = {
        Greetings: "Welcome to Zach's Meme API! Below are links to where you can get more info and find all the endpoints attached to this RESTful API.",
        Website: "https://memes.zachl.space",
        Source: "https://github.com/ZachLTech/RandomMemeRestAPI",
        Docs: "https://memes.zachl.space/#docs"
      };

      return json;
    })

    .get('/random/json', ({set}) => {
      ((!!(Math.random() * 2 | 0))) ? set.redirect = '/pic/json':set.redirect = '/vid/json'; // Random Bool to redirect- 1 line :D
    })
    .get('/random/html', ({set}) => {
      ((!!(Math.random() * 2 | 0))) ? set.redirect = '/pic/html':set.redirect = '/vid/html';
    }) 
    .get('/random/json/:amount', ({set, params: { amount } }) => {
      ((!!(Math.random() * 2 | 0))) ? set.redirect = `/pic/json/${amount}`:set.redirect = `/vid/json/${amount}`;

      let json: any = {
        success: 'true',
        MemeURL: ['test','test'],
        Please: 'Come Again!'
      };

      for(let i = 0; i < Number(amount); i++){
        json.MemeURL.push("https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false");
      }

      return json;

    })

    .get('/pic/json', () => {

      let link = "https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;
    })
    .get('/vid/json', () => {
      
      let link = "https://zipline.lopezhome.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;

    })
    .get('/pic/json/:amount', ({ params: { amount } }) => {
      
      let json: any = {
        success: 'true',
        MemeURL: [],
        Please: 'Come Again!'
      };

      for(let i = 0; i < Number(amount); i++){
        json.MemeURL.push("https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false");
      }

      return json;

    })

    .get('/vid/json/:amount', ({ params: { amount } }) => {
      
      let json: any = {
        success: 'true',
        MemeURL: [],
        Please: 'Come Again!'
      };

      for(let i = 0; i < Number(amount); i++){
        json.MemeURL.push("https://zipline.lopezhome.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false");
      }

      return json;
      
    })
    
    .use(html())
    
    .get('/pic/html', () => `
              <img id="media" src=""></img>
              <script defer>
                let media = document.getElementById("media");
                let link = "https://zipline.lopezhome.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
                media.setAttribute('src', link);
              </script>
    `)
    .get('/vid/html', () => `
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

