<template>
  <YandexMap :coordinates="coordinates" :detailed-controls="detailedControls" :controls="controls" :zoom="17" map-type="map" />
</template>

<script setup>
import { YandexMap } from 'vue-yandex-maps'
const coordinates = [53.19058, 44.9848]
const controls = ['fullscreenControl']
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } }
</script>

<style scoped></style>
