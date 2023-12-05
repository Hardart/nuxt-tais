// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: '/js/uikit.min.js', defer: true }],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contacts': { prerender: true },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-delay-hydration', '@morev/vue-transitions/nuxt'],

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
    mode: 'init',
  },
})
