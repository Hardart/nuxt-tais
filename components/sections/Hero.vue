<script setup lang="ts"></script>
<template>
  <Section padding="none" :expand-right="true">
    <div class="flex flex-wrap">
      <div class="lg:max-w-[453px] lg:w-1/3 flex items-center max-lg:justify-center flex-grow max-lg:py-7 lg:pr-6">
        <div class="max-lg:text-center">
          <CardsDescriptionSection type="text" text="Premium Dental Service" />
          <CardsDescriptionTitle title="Добиваемся реального оздоровления и омоложения вашего организма" class="font-semibold" />
        </div>
      </div>
      <div class="lg:w-2/3 flex-grow marker:bg-emerald-600">
        <div class="relative">
          <div class="absolute -left-[170px] max-xl:hidden">
            <NuxtImg src="/shapes/home-shape-01.svg" width="170" height="170" />
          </div>
          <div class="lg:-mr-[40px]">
            <NuxtImg src="/images/home-hero.jpeg" width="1510" height="885" :placeholder="[70, 41, 60, 5]" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
