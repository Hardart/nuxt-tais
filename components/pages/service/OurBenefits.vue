<template>
  <Section padding="large">
    <ImagesDecorateShape image="blue-circle" class="right-5 xl:right-10 -top-20 max-lg:hidden" />
    <ImagesDecorateShape image="dark-blue-half-circle" class="right-0 top-32 max-xl:hidden" />
    <div class="text-center mb-20">
      <CardsDescription title="We've Got the Right Treatment for You" sectionTitle="what sets us apart" />
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 max-md:space-y-8 md:gap-10">
      <CardsBenefitsList :benefitList="benefitData" />
    </div>
  </Section>
</template>

<script setup lang="ts">
const benefitData = [
  {
    title: 'Personal and empathetic staff',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Intensive Consultation',
    text: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
  },
  {
    title: 'Taylor-made treatment plan',
    text: 'Consectetur adi piscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    title: 'Always There for You',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Board Certification',
    text: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Modern Technology',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Dolore eu fugiat nulla pariatur.',
  },
]
</script>

<style lang="scss"></style>
