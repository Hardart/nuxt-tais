<script setup lang="ts">
defineProps(['image', 'title', 'specialization'])
</script>

<template>
  <div class="grid">
    <img :src="`/images/team/0${image}.webp`" width="450" height="590" loading="lazy" />
    <h5 class="text-lg font-semibold mt-4">{{ title }}</h5>
    <p class="text-sm font-light">{{ specialization }}</p>
  </div>
</template>

<style></style>
