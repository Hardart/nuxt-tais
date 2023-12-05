export const useSettings = async () => {
  const settings = ref()

  async function fetchSettings() {
    const key = `settings`
    const nuxtApp = useNuxtApp()
    return await useFetch<IAppSetting>('/api/settings', {
      key,
      getCachedData: key => nuxtApp.payload.data[key],
    })
  }

  const { data } = await fetchSettings()
  settings.value = data.value

  return { settings }
}
