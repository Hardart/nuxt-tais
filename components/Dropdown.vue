<script setup lang="ts">
const serviceData = [
  { title: 'Акне', icon: 'general-dentistry' },
  { title: 'Чистка лица', icon: 'tooth-shine' },
  { title: 'Коррекция фигуры', icon: 'brush' },
  { title: 'Устранение морщин', icon: 'implant-dentistry' },
  { title: 'Очищение организма', icon: 'tooth-stroke' },
  { title: 'Акции', icon: 'endodontics' },
]
</script>
<template>
  <div class="top-16 w-full z-[2]">
    <HPopover v-slot="{ open }" class="relative">
      <HPopoverButton
        class="relative flex items-center justify-center px-2 box-border min-h-[80px] hover:text-green-600 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
      >
        <span>Solutions</span>
        <Icon
          class="ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80"
          name="heroicons:chevron-down"
          :class="open ? 'text-orange-300' : 'text-orange-300/70'"
          aria-hidden="true"
        />
      </HPopoverButton>

      <HPopoverPanel class="fixed left-0 w-screen transform px-4 sm:px-0 bg-sky-800">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
          <Container>
            <ul ref="menu" class="grid grid-flow-col grid-cols-3 xl:grid-cols-4 grid-rows-3 gap-x-2 gap-y-6 py-10">
              <li class="hover:bg-sky-400/25 cursor-pointer py-2 px-3 rounded-md group" v-for="{ icon, title } in serviceData">
                <div class="flex items-start gap-x-2">
                  <NuxtImg :src="`/icons/icon-services-${icon}.svg`" width="40" height="40" />
                  <div>
                    <h3 class="text-xl font-medium text-white">{{ title }}</h3>
                    <p class="text-sm text-white/50 group-hover:text-white">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
              </li>
            </ul>
          </Container>
        </div>
      </HPopoverPanel>
    </HPopover>
  </div>
</template>
