<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="bg-green-600 text-white px-8 py-4 leading-[48px] rounded-3xl hovered"
    :class="[size == 'sm' && 'px-3 pt-1 pb-1.5']"
    >{{ text }}</NuxtLink
  >
  <button v-else class="bg-green-600 text-white px-8 leading-[48px] rounded-3xl hovered" :class="[size == 'sm' && 'px-3 pt-1 pb-1.5']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    text?: string
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    text: 'Подробнее...',
    size: 'lg',
  }
)
</script>

<style scoped></style>
