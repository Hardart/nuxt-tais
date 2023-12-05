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
    <div class="flex items-center px-10 space-x-10">
      <div class="flex-1 max-xl:hidden">
        <img src="shapes/hero-shape-01.svg" width="750" height="600" />
      </div>
      <div class="text-center w-full xl:w-2/5">
        <CardsDescriptionSection text="doctors" />
        <CardsDescriptionTitle title="Meet The Medical Team" class="mb-8 font-semibold" size="h2" />
        <p class="text-2xl max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="flex-1 max-xl:hidden">
        <img src="shapes/hero-shape-02.svg" width="750" height="600" />
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
  <SectionsSimpleWithBg
    title="Find Out More About Our Practice"
    image="doctors.webp"
    text="Meet the team and explore our practice."
    btn-text="О нас"
  />
</template>

<style></style>
