<script setup lang="ts">
const team = [
  {
    name: 'Ella Ward',
    specialization: 'Dental Assistant',
  },

  {
    name: 'Cedric Wilson',
    specialization: 'Dental Assistant',
  },

  {
    name: 'Sandra Kim',
    specialization: 'Dental Assistant',
  },

  {
    name: 'Edie Sheffield',
    specialization: 'Dental Assistant',
  },

  {
    name: 'Miriam Weber',
    specialization: 'Office Management',
  },

  {
    name: 'Amber Rosso',
    specialization: 'Office Management',
  },

  {
    name: 'Alison Hart',
    specialization: 'Front Desk',
  },

  {
    name: 'Shelley Wyatt',
    specialization: 'Front Desk',
  },
]
</script>

<template>
  <Section>
    <div class="mb-10 text-center">
      <CardsDescription
        section-title="our professionals"
        title="Meet the Team"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in voluptate velit esse cillum dolore."
      />
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <CardsSpecialist v-for="(spec, i) in team" :image="i + 1" :title="spec.name" :specialization="spec.specialization" />
    </div>
  </Section>
</template>

<style></style>
