<script setup lang="ts">
import type { ImgHTMLAttributes } from 'nuxt/dist/app/compat/capi'

withDefaults(
  defineProps<{
    shapeTitle: string
    width: string | number
    height: string | number
    shapeClass?: string
    wrapClass?: string
    loading?: 'lazy' | 'eager'
  }>(),
  {
    wrapClass: 'flex-1 max-xl:hidden',
    width: '750',
    height: '600',
  }
)
</script>

<template>
  <div :class="wrapClass">
    <img :class="shapeClass" :src="`/images/shapes/${shapeTitle}.svg`" :width="width" :height="height" :loading="loading" />
  </div>
</template>

<style></style>
