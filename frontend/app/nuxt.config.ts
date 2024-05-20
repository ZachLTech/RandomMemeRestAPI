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

  modules: [
    '@nuxtjs/device',
    '@nuxtjs/plausible',
  ],
  
  plausible: {
    apiHost: 'https://analytics.lopezhome.tech',
  },
})