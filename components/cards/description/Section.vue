<template>
  <div v-if="!href" class="max-lg:text-center text-emerald-600 uppercase tracking-wide text-sm">
    {{ text }}
  </div>
  <NuxtLink :to="href" v-else class="relative max-lg:text-center text-emerald-600 uppercase tracking-wide text-sm">{{ text }}</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  href?: string
}>()
</script>

<style scoped>
a::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -4px;
  left: 0px;
  right: 100%;
  height: 2px;
  background-color: #059669;
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

a:hover::after {
  right: 0;
}
</style>
