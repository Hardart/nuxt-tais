<script setup lang="ts">
const menuData = [
  { title: 'Прайс', href: '/price' },
  { title: 'Услуги', href: '/service' },
  { title: 'О нас', href: '/about' },
  { title: 'Контакты', href: '/contacts' },
  { title: 'Новости', href: '/blog' },
]
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
