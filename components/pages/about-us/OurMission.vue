<template>
  <Section padding="large">
    <img class="absolute -top-[30px] left-0" src="/images/shapes/home-shape-03.svg" width="540" height="800" loading="lazy" />
    <div class="grid grid-cols-1 lg:grid-cols-3 max-lg:space-y-12 max-lg:justify-center">
      <div class="lg:max-w-xs">
        <CardsDescription section-title="почему выбирают нас" title="We Are Union Dental, and Your Smile Is Our Mission" />
      </div>
      <div class="grid md:grid-cols-2 md:grid-rows-2 lg:col-span-2 max-md:space-y-8 md:gap-10">
        <CardsBenefitsList :benefitList="benefitData" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
const benefitData = [
  {
    title: 'A Comfortable Dentist Visit Right From the Beginning',
    text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Our Friendly and Professional Staff Is Always Here for You',
    text: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
  },
  {
    title: 'Modern, Spacious Rooms With a Soothing Atmosphere',
    text: 'Consectetur adi piscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    title: 'State of the Art Technology and Superior Materials',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
</script>

<style lang="scss"></style>
