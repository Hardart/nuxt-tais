<template>
  <Section padding="large">
    <div class="flex flex-wrap max-lg:space-y-8 max-lg:justify-center">
      <div class="max-lg:text-center max-lg:px-10 lg:w-1/3 lg:pr-10">
        <CardsDescriptionSection type="text" text="Для наших клиентов" />
        <CardsDescriptionTitle class="mb-6" size="h2" title="Your Benefits" />
        <CardsDescriptionText text="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt." />
      </div>
      <div class="lg:w-2/3 grid md:grid-cols-2 md:grid-rows-2 gap-8 lg:gap-14">
        <div class="flex max-md:flex-col max-md:items-center" v-for="item in benefitData">
          <div class="min-w-[40px]">
            <NuxtImg src="/icons/icon-check.svg" width="40" height="40" />
          </div>
          <div class="md:pl-4 max-md:text-center max-md:pt-4">
            <h3 class="text-xl md:text-2xl lg:text-3xl mb-3 lg:mb-6">{{ item.title }}</h3>
            <p class="font-light leading-6 lg:leading-7">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <NuxtImg class="absolute -top-[30px] left-0" src="/shapes/home-shape-03.svg" width="540" height="800" loading="lazy" />
  </Section>
</template>

<script setup lang="ts">
const benefitData = [
  {
    title: 'Modern Technology',
    text: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Always There for You',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    title: 'Board Certification',
    text: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Modern Technology',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia.',
  },
]
</script>

<style lang="scss"></style>
