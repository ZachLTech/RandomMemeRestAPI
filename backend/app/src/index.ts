import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    //CORS
    .use(cors())

    .get('/', () => { // Message for Root
      let json = {
        Greetings: "Welcome to Zach's Meme API! Below are links to where you can get more info and find all the endpoints attached to this RESTful API.",
        Website: "https://memes.zachl.tech",
        Source: "https://github.com/ZachLTech/RandomMemeRestAPI",
        Docs: "https://memes.zachl.tech/#docs"
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
    })

    .get('/pic/json', () => {

      let link = "https://zipline.zachl.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;
    })
    .get('/vid/json', () => {
      
      let link = "https://zipline.zachl.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false";
      let json = {
        success: 'true',
        MemeURL: link,
        Please: 'Come Again!'
      };

      return json;

    })
    .get('/pic/json/:amount', ({ params: { amount } }) => {

      let amountNum = Number(amount);
      let json: any = {
        success: 'true',
        MemeURL: [],
        Please: 'Come Again!'
      };
      // For Negatives
      if(amountNum <= 0){
        return json;
      }
      // Pushes proper amount of URLs to Array & makes sure there aren't repeats
      for(let i = 0; i < amountNum; i++){
        let j = i;
        json.MemeURL.push("https://zipline.zachl.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false");
        if(i == 0){
          continue;
        }
        else{
          while(j != 0){
            if(json.MemeURL[j] == json.MemeURL[j-1]){
              json.MemeURL[j] = ("https://zipline.zachl.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false");
              // console.log(`added new since ${json.MemeURL[j]} & ${json.MemeURL[j-1]} were the same`);
              continue;
            }
            else{
              // console.log(`${json.MemeURL[j]} & ${json.MemeURL[j-1]} were not the same`);
              j--;
            }
          }
        }
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
        json.MemeURL.push("https://zipline.zachl.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false");
      }

      return json;
      
    })
    
    .use(html())
    
    .get('/pic/html', () => `
              <img id="media" src=""></img>
              <script defer>
                let media = document.getElementById("media");
                let link = "https://zipline.zachl.tech/r/pic-" + Math.floor(Math.random() * 111 + 1) + ".png?compress=false";
                media.setAttribute('src', link);
              </script>
    `)
    .get('/vid/html', () => `
            <video controls>
              <source id="media" src="" type="video/mp4"></source>
            </video>
            <script defer>
              let media = document.getElementById("media");
              let link = "https://zipline.zachl.tech/r/vid-" + Math.floor(Math.random() * 77 + 1) + ".mp4?compress=false";
              media.setAttribute('src', link);
            </script>
            
    `)
    .listen(3000);

console.log(
  `😂 Memes running at ${app.server?.hostname}:${app.server?.port}`
);

