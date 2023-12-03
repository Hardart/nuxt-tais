<script setup lang="ts">
defineProps(['images'])
</script>

<template>
  <div class="grid grid-rows-2 sm:grid-cols-4 gap-2 md:gap-4 mt-10">
    <template v-for="(image, i) in images">
      <NuxtPicture
        v-if="!i"
        class="bg--200 col-span-2 row-span-2"
        :src="`/images/${image}`"
        format="webp"
        width="680"
        height="680"
        quality="80"
        loading="lazy"
      />
      <NuxtPicture v-else :src="`/images/${image}`" format="webp" width="330" height="330" quality="70" loading="lazy" />
    </template>
  </div>
</template>

<style></style>
