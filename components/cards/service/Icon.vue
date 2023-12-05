<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <img class="mb-6 max-md:-ml-1.5" :src="`/icons/icon-services-${icon}.svg`" />
</template>

<style></style>
