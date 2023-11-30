<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h5 class="text-xl font-medium mb-2 lg:mb-3 first-letter:uppercase">{{ title }}</h5>
</template>

<style></style>
