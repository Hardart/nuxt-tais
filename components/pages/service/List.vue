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
  </Section>
</template>
