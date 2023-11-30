<template>
  <Section padding="large" :expand-right="true">
    <div class="flex flex-wrap">
      <div class="lg:pl-10 lg:-ml-10 lg:w-1/3 flex-grow flex items-center max-lg:justify-center max-lg:my-10">
        <div class="max-lg:text-center">
          <CardsDescriptionSection text="Специалисты" type="text" />
          <CardsDescriptionTitle title="Мы полностю нацелены на здоровье вашего тела" size="h2" class="mb-4" />
          <CardsDescriptionText
            class="lg:mb-6"
            text="
            Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          "
          />
          <UiTaisButton text="Наша команда" to="/team" />
        </div>
      </div>
      <div class="lg:pl-10 lg:w-2/3 flex-grow">
        <NuxtPicture src="/images/home-doctors.png" format="webp" width="1270" height="729" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
