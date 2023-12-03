export const useService = () => {
  const service = ref()

  async function serviceData(query?: object) {
    const key = `service/` + JSON.stringify(query)
    const nuxtApp = useNuxtApp()
    return await useFetch<{ list: IServiceData[]; desc: IDescCard }>('/api/service', {
      query,
      key,
      getCachedData: key => nuxtApp.payload.data[key],
    })
  }

  serviceData().then(({ data }) => {
    service.value = data.value
  })

  return { serviceData, service }
}
