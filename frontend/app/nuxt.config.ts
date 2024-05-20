// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/device', '@nuxtjs/plausible', "@nuxtjs/seo"],
  
  plausible: {
    apiHost: 'https://analytics.lopezhome.tech',
  },

  site: {
    url: 'https://memes.zachl.space',
    name: 'Meme API',
    description: 'A simple to use API for Memes which everyone most definitely needs lol',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  }
})