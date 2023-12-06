<script setup lang="ts">
const { settings } = await useSettings()
provide('settings', settings)
onMounted(() => {
  const image = new Image()
  image.src = 'http://37.220.86.111/images/doctors/01.webp'
})
</script>
<template>
  <div>
    <Header class="z-50 bg-white relative" />
    <MainMenu />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style></style>
