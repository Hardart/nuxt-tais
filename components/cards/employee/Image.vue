<script lang="ts" setup>
defineProps<{
  image: string
  width: number
  height: number
}>()
</script>
<template>
  <div class="overflow-hidden">
    <NuxtImg
      :src="`images/doctors/${image}.webp`"
      :width="width"
      :height="height"
      loading="lazy"
      fit="cover"
      :placeholder="[50, 63, 60, 15]"
    />
  </div>
</template>

<style></style>
