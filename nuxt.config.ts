export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'MEKK - Kecskesajt Megrendelés',
      short_name: 'MEKK',
      description: 'Kecskesajt megrendelés kezelő alkalmazás',
      theme_color: '#3b82f6',
      background_color: '#f3f4f6',
      display: 'standalone',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  app: {
    head: {
      title: 'MEKK - Kecskesajt Megrendelés',
      meta: [
        { name: 'description', content: 'Kecskesajt megrendelés kezelő alkalmazás' },
        { name: 'theme-color', content: '#3b82f6' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  typescript: {
    strict: true
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL ?? '',
      supabaseKey: process.env.SUPABASE_KEY ?? '',
      apiUrl: '',
      appUrl: ''
    }
  },

  compatibilityDate: '2024-01-01'
})
