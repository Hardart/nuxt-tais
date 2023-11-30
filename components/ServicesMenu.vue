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
      class="absolute left-0 w-screen transform px-4 sm:px-0 bg-sky-800 z-50"
      v-if="isOpen"
      @mouseenter="onEnterDropbar"
      @mouseleave="onLeaveDropbar"
    >
      <Container>
        <ul
          ref="menu"
          class="grid grid-flow-col grid-cols-3 xl:grid-cols-4 grid-rows-3 gap-x-2 gap-y-6 py-10 duration-500 transition-opacity"
        >
          <li v-for="{ icon, title } in serviceData">
            <div class="flex gap-x-2">
              <NuxtImg class="mb-6" :src="`/icons/icon-services-${icon}.svg`" width="40" height="40" />
              <div>
                <h3 class="text-xl font-medium text-white">{{ title }}</h3>
                <p class="text-sm text-white/70">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  </TransitionExpand>
</template>

<style scoped></style>
