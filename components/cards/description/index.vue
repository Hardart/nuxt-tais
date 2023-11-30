<template>
  <component v-for="component in components" :is="component"></component>
</template>

<script setup lang="ts">
defineProps<{
  components: Component[]
}>()
</script>

<style lang="scss"></style>
