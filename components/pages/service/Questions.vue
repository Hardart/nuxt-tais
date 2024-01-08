<template>
  <Section padding="large">
    <ImagesShape shape-title="home-shape-03" wrap-class="absolute -top-[30px] left-0" width="540" height="800" loading="lazy" />
    <div class="grid grid-cols-1 lg:grid-cols-3 max-lg:space-y-12 max-lg:justify-center lg:space-x-5">
      <CardsDescription class="lg:max-w-xs" section-title="FREQUENTLY ASKED QUESTIONS" title="You have a question? We have an answer." />
      <UkAccordion class="lg:col-span-2" :items="items" />
    </div>
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

const items = [
  {
    title: 'How to keep my teeth healthy?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'My teeth feel fine. Do I still need to see a dentist?',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'How often do I have to get a checkup?',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'When do I have to arrive for my appointment?',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
  },
]
</script>

<style lang="scss"></style>
