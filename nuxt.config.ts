// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ href: '/css/uikit.lightbox.css', rel: 'stylesheet' }],
      script: [{ src: '/js/uikit.min.js', defer: true }],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contacts': { prerender: true },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', 'nuxt-delay-hydration', 'nuxt-headlessui', '@morev/vue-transitions/nuxt'],
  headlessui: {
    prefix: 'H',
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
    mode: 'init',
  },
})
