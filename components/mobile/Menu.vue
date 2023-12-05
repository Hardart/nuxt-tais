<script setup lang="ts">
const settings = inject<Ref<IAppSetting>>('settings')
if (!settings?.value) throw createError('MainPageData undefined!')
const menuData = settings.value.mainMenu
defineProps<{
  closeHandler: () => void
}>()
</script>

<template>
  <ul class="divide-y divide-white/30 my-2 px-6">
    <li class="flex text-white py-5 first-letter:uppercase" v-for="item in menuData">
      <NuxtLink @click="closeHandler" :to="item.href">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<style></style>
