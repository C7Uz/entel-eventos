export default defineNuxtConfig({
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  
  // Configuración de componentes para auto-import
 
  
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
      link: [{ 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/assets/img/icons/favicon.svg' // Corregido: removido /public
      }],
    }
  }
})