<script lang="ts" setup>
defineProps<{
  serviceData: IServiceData[]
  showCount?: number
  showDesc?: boolean
}>()
</script>

<template>
  <template v-for="({ title, icon }, i) in serviceData" v-if="showCount">
    <CardsService
      v-if="i < showCount"
      :title="title"
      :icon="icon"
      class="w-full md:w-1/2 lg:w-1/3"
      :class="{ 'lg:hidden': i === serviceData.length - 1, 'md:max-lg:order-3': i == 2, 'md:max-lg:order-4': i == 5 }"
    />
  </template>
  <template v-for="({ title, icon, procedures }, i) in serviceData" v-else-if="showDesc">
    <CardsService
      :title="title"
      :icon="icon"
      :procedures="procedures"
      class="w-full md:w-1/2 lg:w-1/3"
      :class="{ 'lg:hidden': i === serviceData.length - 1, 'md:max-lg:order-3': i == 2, 'md:max-lg:order-4': i == 5 }"
    />
  </template>
  <template v-for="({ title, icon }, i) in serviceData" v-else>
    <CardsService
      :title="title"
      :icon="icon"
      class="w-full md:w-1/2 lg:w-1/3"
      :class="{ 'lg:hidden': i === serviceData.length - 1, 'md:max-lg:order-3': i == 2, 'md:max-lg:order-4': i == 5 }"
    />
  </template>
</template>
