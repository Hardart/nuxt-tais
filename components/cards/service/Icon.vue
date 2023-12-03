<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <NuxtImg class="mb-6" :src="`/icons/icon-services-${icon}.svg`" width="70" height="70" />
</template>

<style></style>
