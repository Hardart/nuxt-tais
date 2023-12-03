<script setup lang="ts">
defineProps(['procedures'])
</script>

<template>
  <ul>
    <li v-for="item in procedures">{{ item }}</li>
  </ul>
</template>

<style></style>
