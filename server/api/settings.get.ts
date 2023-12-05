export default defineEventHandler(async event => {
  const service = await $fetch('/api/service')
  const mainMenu = await $fetch('/api/main-menu')
  return { service, mainMenu }
})
