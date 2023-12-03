<template>
  <Section padding="large">
    <div class="grid grid-cols-1 lg:grid-cols-3 max-lg:space-y-12 max-lg:justify-center">
      <CardsDescription
        section-title="Для наших клиентов"
        title="Your Benefits"
        text="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt."
      />
      <div class="grid md:grid-cols-2 md:grid-rows-2 lg:col-span-2 max-md:space-y-8 md:gap-10">
        <CardsBenefitsList :benefitList="benefitData" />
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
