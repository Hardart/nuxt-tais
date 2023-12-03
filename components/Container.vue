<script setup lang="ts">
defineProps<{
  expand?: boolean
}>()
</script>
<template>
  <div class="px-5 md:px-8 lg:px-10 mx-auto box-content" :class="[expand ? 'max-w-full' : 'max-w-[1360px]']">
    <slot />
  </div>
</template>

<style lang="scss"></style>
