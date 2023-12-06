<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <img class="max-md:-ml-1.5 w-10 sm:w-16" :src="`/icons/icon-services-${icon}.svg`" width="65" height="65" />
</template>

<style></style>
