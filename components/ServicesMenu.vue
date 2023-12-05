<script lang="ts" setup>
const settings = inject<Ref<IAppSetting>>('settings')
if (!settings) throw createError('MainPageData undefined!')

const { service } = settings.value

const { isOpen, mainMenu } = useMenu()
</script>

<template>
  <TransitionExpand easing="cubic-bezier(0.22, 1, 0.36, 1)" :duration="400" no-opacity mode="out-in">
    <div
      class="absolute left-0 w-full px-4 sm:px-0 bg-sky-800 z-50"
      v-if="isOpen"
      @mouseenter="mainMenu.open($event.target as HTMLElement)"
      @mouseleave="mainMenu.close()"
      :data-menu="'service'"
    >
      <Container>
        <ul class="grid grid-flow-col grid-cols-3 xl:grid-cols-3 grid-rows-5 gap-x-2 gap-y-6 py-8">
          <li class="hover:bg-sky-400/10 cursor-pointer py-2 px-3 rounded-md group" v-for="{ icon, title } in service.list">
            <div class="flex gap-x-2">
              <img class="opacity-50 group-hover:opacity-100" :src="`/icons/icon-services-${icon}.svg`" width="40" height="40" />
              <div>
                <h3 class="text-lg font-medium text-white">{{ title }}</h3>
                <p class="text-sm text-white/50 group-hover:text-white">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </li>
          <li class="row-span-4 ml-auto">
            <CardsEmployeeImage :width="200" :height="210" image="01" class="rounded-lg" />
            <p class="text-neutral-100 mt-3">Для консультации просто</p>
            <UiTaisButton size="sm" text="свяжитесь с нами" to="/contacts" @click="mainMenu.close()" />
          </li>
        </ul>
      </Container>
    </div>
  </TransitionExpand>
</template>

<style scoped></style>
