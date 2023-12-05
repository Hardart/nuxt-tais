<template>
  <p class="max-lg:mb-8 max-md:text-base text-lg lg:max-w-3xl">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
