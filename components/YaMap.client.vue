<script setup lang="ts">
import { YandexMap } from 'vue-yandex-maps'
const coordinates = [53.19058, 44.9848]
</script>

<template>
  <YandexMap :coordinates="coordinates" :controls="[]" :zoom="17" map-type="map" />
</template>

<style scoped></style>
