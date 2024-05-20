# Zach's Meme API 😂

[![Status](https://uptime.lopezhome.tech/api/badge/27/status?style=for-the-badge)](https://uptime.lopezhome.tech/status/memeapi)

Just a funny API with elysiajs because bun is cool and I had this idea a while ago for fun 😀

## Features
- Endpoints for a funny video, picture, or a roulette between the 2
- Freedom to choose whether you want a JSON or HTML formatted response 
- Multi-meme requests for a single endpoint
- Singe page website with docs & live demo (mobile support included)
- Anti meme repetition when using the multi-meme request endpoint
- Self hostable with included Dockerfiles & docker-compose yaml
- Plenty of funny videos & pictures (depending on your humor I guess)

## Try It

### [Website](https://memes.zachl.space)
You can visit the website for this repo with a demo [here](https://memes.zachl.space)

### Endpoints
Below are also the Available API URI's you can use to try my API yourself. Have Fun!

#### For JSON Results
- [`/random/json`](https://memeapi.zachl.space/random/json)
- [`/vid/json`](https://memeapi.zachl.space/vid/json)
- [`/pic/json`](https://memeapi.zachl.space/pic/json)

- [`/random/json/x`](https://memeapi.zachl.space/random/json/5)
- [`/vid/json/x`](https://memeapi.zachl.space/vid/json/5)
- [`/pic/json/x`](https://memeapi.zachl.space/pic/json/5)
#### For HTML Results
- [`/random/html`](https://memeapi.zachl.space/random/html)
- [`/vid/html`](https://memeapi.zachl.space/vid/html)
- [`/pic/html`](https://memeapi.zachl.space/pic/html)

## Self-Hosted Deployment 🐋

You can deploy this application on your own server using Docker. Follow the instructions below to set up and run the application using Docker and Docker Compose.

### Prerequisites

Ensure you have the following installed on your server:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Steps to Deploy

1. **Clone the Repository**

   ```sh
   git clone https://github.com/ZachLTech/RandomMemeRestAPI.git
   cd RandomMemeRestAPI
   ```

2. **Build the Docker Images**

   ```sh
   docker-compose build
   ```

3. **Run the Containers**

   ```sh
   docker-compose up -d
   ```

### Stopping the Application

```sh
docker-compose down
```

### Configuration
- If you need to customize the configuration, you can modify the `docker-compose.yml` file and the respective `Dockerfiles` according to your requirements.
- Default ports are 9787 for the frontend and 9786 for the backend

## TODO
- ~~Setup semi-public file sharing system for meme source~~
- ~~Gather, convert, and rename all memes~~
- ~~upload all media to DB of memes~~
- ~~secure DB with service restrictions~~
- ~~Setup and write endpoints / API code~~
- ~~Integrate docker and deploy API (with working domain & endpoints)~~
- ~~Start on frontend~~
- ~~Shorten endpoints (already done in readme)~~
- ~~Add multi-meme requests to API for frontend~~
- ~~Add meme grid button to randomize~~
- ~~Finish Frontend~~
- ~~(BE) Implement recursive function so /x/json/y endpoint doesn't return repeated memes~~
- ~~(FE) Add mobile support~~
- Done 😄