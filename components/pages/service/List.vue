<script setup lang="ts">
const service = inject<IMainPageData>('service')

if (!service) throw createError('MainPageData undefined!')
</script>
<template>
  <Section padding="large" padding-top-remove>
    <div class="flex flex-wrap">
      <DelayHydration>
        <CardsServiceList v-if="service.list" :service-data="service.list" />
      </DelayHydration>
    </div>
    <div class="absolute left-0 -bottom-[140px] max-2xl:hidden">
      <NuxtImg src="/shapes/home-shape-02.svg" width="165" height="330" loading="lazy" />
    </div>
  </Section>
</template>

<style></style>
