<script lang="ts" setup>
const serviceData = [
  { title: 'Акне', icon: 'general-dentistry' },
  { title: 'Чистка лица', icon: 'tooth-shine' },
  { title: 'Коррекция фигуры', icon: 'brush' },
  { title: 'Устранение морщин', icon: 'implant-dentistry' },
  { title: 'Очищение организма', icon: 'tooth-stroke' },
  { title: 'Акции', icon: 'endodontics' },
]

const { isOpen, onEnterDropbar, onLeaveDropbar } = useMenu()
</script>

<template>
  <TransitionExpand :no-opacity="true">
    <div
      ref="dropdown"
      class="absolute left-0 w-full transform px-4 sm:px-0 bg-sky-800 z-50"
      v-if="isOpen"
      @mouseenter="onEnterDropbar"
      @mouseleave="onLeaveDropbar"
    >
      <Container>
        <ul
          ref="menu"
          class="grid grid-flow-col grid-cols-3 xl:grid-cols-4 grid-rows-4 gap-x-2 gap-y-6 py-10 duration-500 transition-opacity"
        >
          <li class="hover:bg-sky-400/10 cursor-pointer py-2 px-3 rounded-md group" v-for="{ icon, title } in serviceData">
            <div class="flex gap-x-2">
              <NuxtImg class="opacity-50 group-hover:opacity-100" :src="`/icons/icon-services-${icon}.svg`" width="40" height="40" />
              <div>
                <h3 class="text-xl font-medium text-white">{{ title }}</h3>
                <p class="text-sm text-white/50 group-hover:text-white">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </li>
          <li class="row-span-4 justify-self-end">
            <CardsEmployeeImage :width="250" :height="300" image="01" class="rounded-lg" />
            <p class="text-neutral-100 mt-3 mb-0.5">Для консультации просто</p>
            <UiTaisButton size="sm" text="свяжитесь с нами" to="/contacts" @click="onLeaveDropbar" />
          </li>
        </ul>
      </Container>
    </div>
  </TransitionExpand>
</template>

<style scoped></style>
