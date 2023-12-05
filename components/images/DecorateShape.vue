<script setup lang="ts">
defineProps(['image', 'width', 'height'])
</script>

<template>
  <div class="absolute">
    <img :src="`/images/shapes/${image}.svg`" loading="lazy" />
  </div>
</template>

<style></style>
