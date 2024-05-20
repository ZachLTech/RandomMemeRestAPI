/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#cd4a4b",
          "secondary": "#e2e39a",
          "accent": "#a4d464",
          "neutral": "#1c0808",
          "base-content": "#68634D",
          "base-100": "#fff7d3",
        },
      }
    ],
  },
}

