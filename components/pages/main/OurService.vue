<script setup lang="ts">
const settings = inject<Ref<IAppSetting>>('settings')
if (!settings?.value) throw createError('MainPageData undefined!')
const service = settings.value.service
</script>
<template>
  <Section padding="large" padding-top-remove>
    <div class="flex flex-wrap">
      <DelayHydration>
        <div class="flex items-center max-lg:w-full w-1/3 lg:pr-10 max-lg:justify-center max-lg:my-12">
          <CardsDescription
            v-if="service.desc"
            section-position="second"
            size="h3"
            :title="service.desc.title"
            :text="service.desc.text"
            :section-title="service.desc.subTitle"
          />
        </div>

        <CardsServiceList v-if="service.list" :service-data="service.list" :show-count="5" />
      </DelayHydration>
    </div>
    <ImagesShape
      shape-title="home-shape-02"
      wrap-class="absolute left-0 -bottom-[140px] max-2xl:hidden"
      width="165"
      height="330"
      loading="lazy"
    />
  </Section>
</template>

<style></style>
