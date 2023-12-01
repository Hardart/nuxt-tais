<script lang="ts" setup>
withDefaults(
  defineProps<{
    image: string
    width?: number
    height?: number
    fullname: string
    dept: string
    post: string
  }>(),
  {
    width: 400,
    height: 500,
  }
)
</script>

<template>
  <div class="flex rounded-md overflow-hidden shadow">
    <CardsEmployeeImage :image="image" :width="width" :height="height" class="w-1/3" />
    <div class="flex flex-col bg-sky-100/30 w-2/3 max-lg:p-14 lg:px-8 lg:py-4 xl:py-8 2xl:p-12 hovered">
      <h3 class="font-semibold text-2xl mb-2">{{ fullname }} {{ dept.toUpperCase() }}</h3>
      <p class="uppercase text-sm font-medium text-green-600">{{ post }}</p>
      <div class="flex flex-grow items-end">
        <NuxtLink class="flex items-center justify-center px-8 py-3 rounded-3xl text-slate-800 bg-sky-100"
          ><Icon name="heroicons:arrow-long-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style></style>
