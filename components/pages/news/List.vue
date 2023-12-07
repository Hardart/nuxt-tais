<script setup lang="ts">
defineProps(['news'])
const route = useRoute()
const queryPage = Number(route.query.page)
const page = ref(queryPage || 1)
const perPage = 6
function watchParams() {
  watch(
    () => route.query,
    () => {
      filterNews.value = sliceNews()
    }
  )
}

watchParams()

const news = [
  {
    date: 'JULY 28, 2021',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    image: 'dental-health-and-sustainability',
    link: 'dental-health-and-sustainability',
  },
  {
    date: 'JULY 27, 2021',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    image: 'dentures-and-transplants-what-is-covered-by-the-insurance',
    link: 'dentures-and-transplants-what-is-covered-by-the-insurance',
  },
  {
    date: 'JULY 22, 2021',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    image: 'employee-portraits-get-to-know-ella-and-cedric',
    link: 'employee-portraits-get-to-know-ella-and-cedric',
  },
  {
    date: 'JULY 12, 2021',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    image: 'have-you-had-your-checkup-this-year-stay-on-top',
    link: 'have-you-had-your-checkup-this-year-stay-on-top',
  },
  {
    date: 'JULY 06, 2021',
    title: 'Have you had your checkup this year? Stay on top.',
    image: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
    link: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
  },
  {
    date: 'JUNE 28, 2021',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    image: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
    link: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
  },
  {
    date: 'JUNE 03, 2021',
    title: 'When You Need a Fixed Denture and not an Implant',
    image: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
    link: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
  },
  {
    date: 'MAY 17, 2021',
    title: 'When Children Start Losing Teeth',
    image: 'when-children-start-losing-teeth',
    link: 'when-children-start-losing-teeth',
  },
  {
    date: 'MAY 05, 2021',
    title: 'Dentures and Transplants – What Is Covered by the Insurance',
    image: 'when-you-need-a-fixed-denture-and-not-an-implant',
    link: 'when-you-need-a-fixed-denture-and-not-an-implant',
  },
  {
    date: 'APRIL 26, 2021',
    title: 'Corona Virus Update: A New Hygiene Concept in Our Clinic',
    image: 'corona-virus-update-a-new-hygiene-concept-in-our-clinic',
    link: 'corona-virus-update-a-new-hygiene-concept-in-our-clinic',
  },
  {
    date: 'APRIL 13, 2021',
    title: 'What to Do When a Dental Emergency Occurs',
    image: 'what-to-do-when-a-dental-emergency-occurs',
    link: 'what-to-do-when-a-dental-emergency-occurs',
  },
  {
    date: 'APRIL 09, 2021',
    title: 'Electric Toothbrushes: Guide to Find the Right One',
    image: 'electric-toothbrushes-guide-to-find-the-right-one',
    link: 'electric-toothbrushes-guide-to-find-the-right-one',
  },
  {
    date: 'MARCH 30, 2021',
    title: 'Taking Care of Your Teeth (for Kids)',
    image: 'taking-care-of-your-teeth-for-kids',
    link: 'taking-care-of-your-teeth-for-kids',
  },
  {
    date: 'MARCH 22, 2021',
    title: 'Candid – Our New Teeth Whitening Technology',
    image: 'candid-our-new-teeth-whitening-technology',
    link: 'candid-our-new-teeth-whitening-technology',
  },
  {
    date: 'MARCH 15, 2021',
    title: 'Orthodontic Braces: Types, Costs and Pros and Cons',
    image: 'orthodontic-braces-types-costs-and-pros-and-cons',
    link: 'orthodontic-braces-types-costs-and-pros-and-cons',
  },
  {
    date: 'MARCH 08, 2021',
    title: 'What to Look for in Your Dental Insurance',
    image: '',
    link: 'what-to-look-for-in-your-dental-insurance',
  },
  {
    date: 'MARCH 02, 2021',
    title: 'Dental Implants – Interesting Facts You May Not Know',
    image: '',
    link: 'dental-implants-interesting-facts-you-may-not-know',
  },
  {
    date: 'FEBRUARY 26, 2021',
    title: 'Baby Teeth – Right Dental Care From the Beginning',
    image: '',
    link: 'baby-teeth-right-dental-care-from-the-beginning',
  },
]
const filterNews = ref(sliceNews())

function sliceNews() {
  const start = (page.value - 1) * perPage
  const end = perPage * page.value
  return news.slice(start, end)
}
</script>

<template>
  <Section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <CardsNews v-for="card in filterNews" :key="card.title" :news-card="card" />
    </div>
    <HdrtPagination v-model:page.number="page" :total="news.length" :per-page="perPage" />
  </Section>
</template>

<style></style>
