<script setup lang="ts">
defineProps(['images'])
</script>

<template>
  <div class="grid grid-rows-2 sm:grid-cols-4 gap-2 md:gap-4 mt-10" uk-lightbox="animation: slide">
    <template v-for="(image, i) in images">
      <div class="bg--200 col-span-2 row-span-2" v-if="!i">
        <a :href="`/images/${image}`">
          <img :src="`/images/${image}`" width="680" height="680" loading="lazy" />
        </a>
      </div>
      <div v-else>
        <a :href="`/images/${image}`">
          <img :src="`/images/${image}`" width="330" height="330" loading="lazy" />
        </a>
      </div>
    </template>
  </div>
</template>

<style></style>
