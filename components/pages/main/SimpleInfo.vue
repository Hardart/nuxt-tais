<script setup lang="ts"></script>

<template>
  <Section padding="none" class="pt-10 md:pt-20">
    <div class="flex">
      <div class="md:w-2/5 z-30 space-y-8">
        <CardsDescription
          class="md:text-left"
          section-title="Как добраться"
          title="We Look Forward to Welcoming You in Our Practice"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <div class="w-full max-md:text-center">
          <UiTaisButton to="/contacts" />
        </div>
      </div>
      <div class="max-md:hidden md:w-3/5">
        <ImagesDecorateShape class="right-0 bottom-0" image="home-shape-04" />
      </div>
    </div>
  </Section>
</template>
