<template>
  <NuxtLink v-if="to" :to="to" class="bg-green-600 text-white px-8 py-4 leading-[48px] rounded-3xl hovered">{{ text }}</NuxtLink>
  <button v-else class="bg-green-600 text-white px-8 leading-[48px] rounded-3xl hovered">{{ text }}</button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    text?: string
  }>(),
  {
    text: 'Подробнее...',
  }
)
</script>

<style scoped></style>
