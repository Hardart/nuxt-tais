<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <img class="mb-6 max-md:-ml-1.5" :src="`/icons/icon-services-${icon}.svg`" width="65" height="65" />
</template>

<style></style>
