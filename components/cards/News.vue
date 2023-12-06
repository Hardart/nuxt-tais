<script setup lang="ts">
defineProps(['newsCard'])
</script>

<template>
  <article class="blog-card group">
    <!-- CARD HEADER -->
    <div class="relative">
      <img :src="`http://37.220.86.111/images/blog/blog-post-${newsCard.image}.webp`" width="610" height="357" alt="" loading="lazy" />
      <div class="bg-stone-500/30 group-hover:bg-transparent transition-colors absolute inset-0"></div>
    </div>
    <!-- CARD BODY -->
    <div class="flex-grow px-6 md:px-8 xl:px-10 py-10 space-y-4 md:space-y-6 lg:space-y-8">
      <p class="text-sm text-green-600">{{ newsCard.date }}</p>
      <h3 class="text-xl font-medium tracking-wide">{{ newsCard.title }}</h3>
    </div>
    <!-- CARD FOOTER -->
    <div>
      <NuxtLink :to="`/blog/${newsCard.image}`" />
    </div>
  </article>
</template>

<style></style>
