<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <div class="relative">
    <div class="absolute -left-[170px] max-xl:hidden">
      <NuxtImg src="/shapes/home-shape-01.svg" width="170" height="170" />
    </div>
    <div class="lg:-mr-[40px]">
      <NuxtImg :src="`/images/${image}`" width="1510" height="885" :placeholder="[70, 41, 60, 5]" />
    </div>
  </div>
</template>

<style></style>
