export default defineNuxtRouteMiddleware((to, from) => {
  // in the default layout, but I guess it should be somewhere else
  if (process.client) {
    // prevents window to scrollTop then returns to savedPosition
    scrollRestore()

    // but restore manual scrollRestoration at the first navigation
    const unwatch = useRouter().beforeEach(() => {
      window.history.scrollRestoration = 'manual'
      unwatch()
    })

    // and restore auto scrollRestoration when leaving the page

    window.addEventListener('unload', scrollRestore)
    window.removeEventListener('unload', scrollRestore)
  }

  function scrollRestore() {
    window.history.scrollRestoration = 'auto'
  }
})
