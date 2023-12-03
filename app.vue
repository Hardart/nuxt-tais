<script setup lang="ts">
const { service } = useService()
provide('service', service)
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
