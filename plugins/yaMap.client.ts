import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '96929630-f4c5-4d37-bfd1-d2c4b708492c', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
}
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(YmapPlugin, settings)
})
