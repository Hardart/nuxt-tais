<script setup lang="ts">
const personal = [
  { fullname: 'Gina Lande', dept: 'dmd', post: 'founder and general dentist' },
  { fullname: 'Ford Harris', dept: 'dds', post: 'founder and aesthetic dentist' },
  { fullname: 'Scott Lupin', dept: 'dds', post: 'oral surgeon' },
  { fullname: 'Gina Lande', dept: 'dds', post: 'pediatric dentist' },
]
</script>

<template>
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
