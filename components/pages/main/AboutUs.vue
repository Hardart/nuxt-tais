<script setup lang="ts">
const gridImages = ['home-about-01.jpg', 'home-about-02.jpg', 'home-about-03.jpg', 'home-about-04.jpg', 'home-about-05.jpg']
</script>

<template>
  <Section padding="large">
    <div class="grid grid-cols-1 lg:grid-cols-3 max-lg:space-y-8">
      <CardsDescription
        class="col-span-2"
        section-title="Узнайте нас поближе"
        title="Our Comfortable and  Modern Practice"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
      />
      <div class="text-center lg:justify-self-end lg:self-end">
        <UiTaisButton to="/about" text="О нас" />
      </div>
    </div>
    <ImagesGrid :images="gridImages" />
  </Section>
</template>
