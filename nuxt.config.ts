export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  googleFonts: {
    families: {
      'Open+Sans': true,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
