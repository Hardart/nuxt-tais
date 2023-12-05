<script lang="ts" setup>
defineProps<{
  image: string
  width: number
  height: number
}>()
</script>
<template>
  <img :src="`images/doctors/${image}.webp`" :width="width" :height="height" loading="lazy" />
</template>

<style></style>
