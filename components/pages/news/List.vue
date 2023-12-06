<script setup lang="ts">
const news = [
  {
    date: 'JULY 28, 2021',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    image: 'dental-health-and-sustainability',
  },
  {
    date: 'JULY 27, 2021',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    image: 'dentures-and-transplants-what-is-covered-by-the-insurance',
  },
  {
    date: 'JULY 22, 2021',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    image: 'employee-portraits-get-to-know-ella-and-cedric',
  },
  {
    date: 'JULY 12, 2021',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    image: 'have-you-had-your-checkup-this-year-stay-on-top',
  },
  {
    date: 'JULY 06, 2021',
    title: 'Have you had your checkup this year? Stay on top.',
    image: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
  },
  {
    date: 'JUNE 28, 2021',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    image: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
  },
  {
    date: 'JUNE 03, 2021',
    title: 'When You Need a Fixed Denture and not an Implant',
    image: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
  },
  {
    date: 'MAY 17, 2021',
    title: 'When Children Start Losing Teeth',
    image: 'when-children-start-losing-teeth',
  },
  {
    date: 'MAY 05, 2021',
    title: 'Dentures and Transplants – What Is Covered by the Insurance',
    image: 'when-you-need-a-fixed-denture-and-not-an-implant',
  },
]
</script>

<template>
  <Section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <CardsNews v-for="card in news" :news-card="card" />
    </div>
  </Section>
</template>

<style></style>
