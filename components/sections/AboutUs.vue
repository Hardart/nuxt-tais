<template>
  <Section padding="large">
    <div class="grid grid-cols-2 max-lg:grid-cols-1">
      <div class="max-lg:text-center">
        <CardsDescriptionSection type="text" text="Узнайте нас поближе" />
        <CardsDescriptionTitle title="Our Comfortable and  Modern Practice" class="mb-6" size="h2" />
        <CardsDescriptionText
          class="font-light"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
        />
        <UiTaisButton class="lg:hidden" to="/about" text="О нас" />
      </div>
      <div class="justify-self-end self-end max-lg:hidden"><UiTaisButton to="/about" text="О нас" /></div>
    </div>
    <div class="grid sm:grid-cols-4 grid-rows-2 gap-4 mt-10">
      <NuxtPicture class="bg--200 col-span-2 row-span-2" src="/images/home-about-01.jpg" format="webp" width="680" height="680" />
      <NuxtPicture src="/images/home-about-02.jpg" format="webp" width="330" height="330" quality="70" />
      <NuxtPicture src="/images/home-about-03.jpg" format="webp" width="330" height="330" quality="70" />
      <NuxtPicture src="/images/home-about-04.jpg" format="webp" width="330" height="330" quality="70" />
      <NuxtPicture src="/images/home-about-05.jpg" format="webp" width="330" height="330" quality="70" />
    </div>
  </Section>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
