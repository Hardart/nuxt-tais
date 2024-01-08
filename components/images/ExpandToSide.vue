<script setup lang="ts">
defineProps<{
  image: string
}>()
const shape = '/images/shapes/home-shape-01.svg'
</script>

<template>
  <div class="relative">
    <div class="absolute -left-[170px] max-xl:hidden">
      <img :src="shape" width="170" height="170" />
    </div>
    <div class="lg:-mr-[40px]">
      <img :src="`/images/${image}`" width="1510" height="885" loading="eager" fetchpriority="high" decoding="async" />
    </div>
  </div>
</template>

<style></style>
