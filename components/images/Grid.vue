<script setup lang="ts">
defineProps(['images'])
</script>

<template>
  <div class="grid grid-rows-2 sm:grid-cols-4 gap-2 md:gap-4 mt-10">
    <template v-for="(image, i) in images">
      <img v-if="!i" class="bg--200 col-span-2 row-span-2" :src="`/images/${image}`" width="680" height="680" loading="lazy" />
      <img v-else :src="`/images/${image}`" width="330" height="330" loading="lazy" />
    </template>
  </div>
</template>

<style></style>
