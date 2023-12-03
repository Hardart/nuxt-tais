<script setup lang="ts">
defineProps<{
  image: string
  title: string
  text: string
  btnText: string
}>()
</script>
<template>
  <Section padding="large" :img="image" class="max-xl:bg-center">
    <div class="text-white">
      <div class="space-y-8 max-w-xs pr-10 xl:max-w-xl xl:pr-20">
        <h3 class="font-semibold text-4xl md:text-5xl">{{ title }}</h3>
        <p class="text-lg">{{ text }}</p>
        <UiTaisButton :text="btnText" />
      </div>
    </div>
  </Section>
</template>
