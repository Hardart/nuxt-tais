<script lang="ts" setup>
const settings = inject<Ref<IAppSetting>>('settings')
if (!settings) throw createError('MainPageData undefined!')
const { service } = settings.value
const { isOpen, mainMenu } = useMenu()
const doctorImg = '/images/doctors/01.webp'
</script>

<template>
  <TransitionFade easing="cubic-bezier(0.22, 1, 0.36, 1)" :duration="400" no-opacity mode="in-out">
    <div
      class="absolute left-0 w-full px-4 sm:px-0 bg-gradient-to-br from-sky-800 from-40% to-cyan-600 z-50"
      v-if="isOpen"
      @mouseenter="mainMenu.open($event.target as HTMLElement)"
      @mouseleave="mainMenu.close()"
      :data-menu="'service'"
    >
      <Container>
        <ul class="grid grid-flow-col grid-cols-3 xl:grid-cols-3 grid-rows-5 gap-x-2 gap-y-6 py-8">
          <li class="hover:bg-sky-400/10 cursor-pointer px-3 py-2 rounded-md group" v-for="{ icon, title } in service.list">
            <div class="flex gap-x-2">
              <img class="opacity-50 group-hover:opacity-100" :src="`/icons/icon-services-${icon}.svg`" width="40" height="40" />
              <div>
                <h3 class="text-lg font-medium text-white">{{ title }}</h3>
                <p class="text-sm text-white/50 group-hover:text-white">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </li>
          <li class="row-span-4 ml-auto">
            <img class="rounded-lg shadow-lg" :src="doctorImg" width="190" height="200" />
            <p class="text-neutral-100 mt-3">Для консультации просто</p>
            <UiTaisButton size="sm" text="свяжитесь с нами" to="/contacts" @click="mainMenu.close()" />
          </li>
        </ul>
      </Container>
    </div>
  </TransitionFade>
</template>

<style scoped></style>
