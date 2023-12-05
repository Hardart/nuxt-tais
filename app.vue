<script setup lang="ts">
const { settings } = await useSettings()

provide('settings', settings)
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
