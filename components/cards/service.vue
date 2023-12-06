<script setup lang="ts">
defineProps(['icon', 'title', 'procedures'])
</script>

<template>
  <div class="py-10 md:py-12 lg:py-16 px-8 md:px-12 lg:px-14 space-y-4 even:bg-gray-50 hovered">
    <CardsServiceIcon :icon="icon" />
    <CardsServiceTitle :title="title" class="!mb-8" />
    <CardsServiceProcedures v-if="procedures" :procedures="procedures" />
    <UiTaisButton type="button" />
  </div>
</template>
