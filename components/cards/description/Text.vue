<template>
  <p class="max-lg:mb-8 text-base md:text-lg">{{ text }}</p>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
