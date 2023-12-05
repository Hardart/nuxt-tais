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
    width: 600,
    height: 700,
  }
)
</script>

<template>
  <div class="flex rounded-md overflow-hidden shadow relative">
    <CardsEmployeeImage :image="image" :width="width" :height="height" class="sm:w-2/5" />
    <div class="flex flex-col w-full bg-sky-100/30 px-8 md:px-12 lg:px-10 sm:py-14 md:py-24 lg:py-10 xl:py-20 hovered max-sm:hidden">
      <h3 class="font-semibold text-2xl mb-2">{{ fullname }} {{ dept.toUpperCase() }}</h3>
      <p class="uppercase text-sm font-medium text-green-600">{{ post }}</p>
      <div class="flex flex-grow items-end">
        <NuxtLink class="flex items-center justify-center px-8 py-3 rounded-3xl text-slate-800 bg-sky-100"
          ><Icon name="heroicons:arrow-long-right" size="20" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col absolute bottom-0 left-0 right-0 h-32 bg-stone-800/40 px-4 py-4 sm:hidden">
      <h3 class="font-semibold text-xl mb-2 text-white">{{ fullname }} {{ dept.toUpperCase() }}</h3>
      <p class="uppercase text-xs font-medium text-neutral-100">{{ post }}</p>
      <div class="flex flex-grow items-end">
        <NuxtLink class="flex items-center justify-center px-6 py-1 rounded-3xl text-slate-800 bg-sky-100"
          ><Icon name="heroicons:arrow-long-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style></style>
