<script setup lang="ts">
const settings = inject<Ref<IAppSetting>>('settings')
if (!settings?.value) throw createError('MainPageData undefined!')
const { service } = settings.value
</script>
<template>
  <Section padding="large" padding-top-remove>
    <div class="flex flex-wrap">
      <DelayHydration>
        <CardsServiceList v-if="service.list" :service-data="service.list" />
      </DelayHydration>
    </div>
    <div class="absolute left-0 -bottom-[140px] max-2xl:hidden">
      <img src="/images/shapes/home-shape-02.svg" width="165" height="330" loading="lazy" />
    </div>
  </Section>
</template>

<style></style>
