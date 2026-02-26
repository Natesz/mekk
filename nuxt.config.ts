export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  typescript: {
    strict: true
  },

  runtimeConfig: {
    public: {
      apiUrl: '',
      appUrl: ''
    }
  },

  compatibilityDate: '2024-01-01'
})
