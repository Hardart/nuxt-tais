<script lang="ts" setup>
const personal = [
  { fullname: 'Gina Lande', dept: 'dmd', post: 'founder and general dentist' },
  { fullname: 'Ford Harris', dept: 'dds', post: 'founder and aesthetic dentist' },
  { fullname: 'Scott Lupin', dept: 'dds', post: 'oral surgeon' },
  { fullname: 'Gina Lande', dept: 'dds', post: 'pediatric dentist' },
]
</script>

<template>
  <Section no-container padding="small">
    <div class="flex justify-between items-center px-10">
      <div>
        <NuxtImg src="shapes/hero-shape-01.svg" width="500" />
      </div>
      <div class="text-center w-2/5">
        <CardsDescriptionSection text="doctors" />
        <CardsDescriptionTitle title="Meet The Medical Team" class="mb-8 font-semibold" size="h2" />
        <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div>
        <NuxtImg src="shapes/hero-shape-02.svg" width="500" />
      </div>
    </div>
  </Section>
  <Section>
    <div class="grid lg:grid-cols-2 gap-x-10 gap-y-8">
      <CardsEmployee
        v-for="(person, i) in personal"
        :image="`0${i + 1}`"
        :fullname="person.fullname"
        :dept="person.dept"
        :post="person.post"
      />
    </div>
  </Section>
</template>

<style></style>
