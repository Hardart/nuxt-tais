<script setup lang="ts">
const { settings } = await useSettings()
provide('settings', settings)
onMounted(() => {
  const image = new Image()
  image.src = '/images/doctors/01.webp'
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
