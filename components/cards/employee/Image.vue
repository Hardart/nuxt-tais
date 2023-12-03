<script lang="ts" setup>
defineProps<{
  image: string
  width: number
  height: number
}>()
</script>
<template>
  <NuxtImg :src="`images/doctors/${image}.webp`" :width="width" :height="height" preload />
</template>

<style></style>
