<script setup lang="ts">
const menuData = [
  { title: 'Прайс', href: '/price' },
  { title: 'Услуги', href: '/service' },
  { title: 'О нас', href: '/about' },
  { title: 'Сотрудники', href: '/doctors' },
  { title: 'Контакты', href: '/contacts' },
  { title: 'Новости', href: '/blog' },
]
const { mainMenu } = useMenu()
</script>
<template>
  <div>
    <nav>
      <ul class="flex items-center space-x-8 text-lg">
        <template v-for="(link, i) in menuData">
          <NuxtLink
            active-class="active"
            :to="link.href"
            class="relative flex items-center justify-center box-border min-h-[80px] hover:text-green-600 whitespace-nowrap"
            @mouseenter="mainMenu.open($event.target)"
            @mouseleave="mainMenu.close()"
            @click="mainMenu.close()"
            :data-menu="i == 1 && 'service'"
          >
            {{ link.title }}
          </NuxtLink>
        </template>
      </ul>
    </nav>
    <ServicesMenu />
  </div>
</template>

<style scoped>
a.active {
  color: #a0c764;
}
a::before {
  content: '';
  position: absolute;
  top: 0;
  height: 2px;
  display: block;
  transition: 0.2s ease-in-out;
  background-color: #a0c764;
  right: 50%;
  left: 50%;
}
a.hover-item::before,
a:hover::before,
a.active::before {
  left: 0;
  right: 0;
}
</style>
