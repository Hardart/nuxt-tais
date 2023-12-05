<template>
  <h1 v-if="size == 'h1'" class="text-4xl md:text-5xl lg:text-6xl text-sky-950">{{ title }}</h1>
  <h2 v-else-if="size == 'h2'" class="text-3xl lg:text-4xl xl:text-5xl text-sky-950">{{ title }}</h2>
  <h3 v-else-if="size == 'h3'" class="text-2xl md:text-3xl text-sky-950">{{ title }}</h3>
  <h4 v-else class="text-xl lg:text-2xl text-sky-950">{{ title }}</h4>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    size?: string
  }>(),
  {
    size: 'h3',
  }
)
</script>
