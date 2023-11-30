<template>
  <Section padding="large" class="!pt-0">
    <div class="flex flex-wrap">
      <div class="flex items-center max-lg:w-full w-1/3 lg:pr-10 max-lg:justify-center max-lg:my-12">
        <div class="max-lg:text-center">
          <CardsDescriptionTitle title="Профилактическая медицина для занятых людей" size="h2" class="mb-4" />
          <CardsDescriptionText
            class="lg:mb-6"
            text="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt."
          />
          <CardsDescriptionSection type="link" text="Мастерская идеального тела" href="team" />
        </div>
      </div>
      <template v-for="({ title, icon }, i) in serviceData">
        <CardsService
          :title="title"
          :icon="icon"
          class="w-full md:w-1/2 lg:w-1/3"
          :class="{ 'lg:hidden': i === serviceData.length - 1, 'md:max-lg:order-3': i == 2, 'md:max-lg:order-4': i == 5 }"
        />
      </template>
    </div>
    <div class="absolute left-0 -bottom-[140px] max-2xl:hidden">
      <NuxtImg src="/shapes/home-shape-02.svg" width="165" height="330" loading="lazy" />
    </div>
  </Section>
</template>

<script setup lang="ts">
const serviceData = [
  { title: 'Акне', icon: 'general-dentistry' },
  { title: 'Чистка лица', icon: 'tooth-shine' },
  { title: 'Коррекция фигуры', icon: 'brush' },
  { title: 'Устранение морщин', icon: 'implant-dentistry' },
  { title: 'Очищение организма', icon: 'tooth-stroke' },
  { title: 'Специальные предложения', icon: 'endodontics' },
]
</script>

<style></style>
