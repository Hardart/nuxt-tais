<template>
  <div class="py-20 px-12 lg:px-14 even:bg-gray-50 hovered">
    <NuxtImg class="mb-6" :src="`/icons/icon-services-${icon}.svg`" width="70" height="70" />

    <h3 class="md:max-xl:text-xl text-2xl mb-10">{{ title }}</h3>
    <UiTaisButton type="button" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
}>()
</script>

<style lang="scss"></style>
