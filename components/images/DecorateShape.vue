<script setup lang="ts">
defineProps(['image', 'width', 'height'])
</script>

<template>
  <div class="absolute max-lg:hidden">
    <img :src="`/images/shapes/${image}.svg`" loading="lazy" />
  </div>
</template>

<style></style>
