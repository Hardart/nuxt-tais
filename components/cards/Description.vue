<script setup lang="ts">
withDefaults(
  defineProps<{
    sectionTitle?: string
    title: string
    text?: string
    size?: 'h1' | 'h2' | 'h3' | 'h4'
    sectionPosition?: 'first' | 'second'
  }>(),
  {
    sectionPosition: 'first',
  }
)
</script>

<template>
  <div class="max-lg:text-center space-y-5">
    <CardsDescriptionSection v-if="sectionPosition == 'first' && sectionTitle" type="text" :text="sectionTitle" />
    <CardsDescriptionTitle :title="title" :size="size" class="font-semibold" />
    <CardsDescriptionText v-if="text" :text="text" />
    <CardsDescriptionSection v-if="sectionPosition == 'second' && sectionTitle" type="text" :text="sectionTitle" />
  </div>
</template>
