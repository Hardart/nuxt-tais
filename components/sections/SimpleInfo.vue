<template>
  <Section padding="none" class="pt-20">
    <div class="flex">
      <div class="md:w-2/5">
        <CardsDescriptionSection text="Как добраться" />
        <CardsDescriptionTitle title="We Look Forward to Welcoming You in Our Practice" size="h2" class="mb-6" />
        <CardsDescriptionText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          class="mb-6"
        />
        <UiTaisButton to="/contacts" />
      </div>
      <div class="max-md:hidden md:w-3/5">
        <div class="absolute right-0 bottom-0">
          <NuxtImg src="/shapes/home-shape-04.svg" width="510" height="355" loading="lazy" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
