export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'https://api.larutaentelempresas.pe'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Entel - Marketing e innovación',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/public/assets/img/icons/favicon.svg' }],
    }
  }
})
