<template>
  <Section padding="large" class="!pb-0">
    <div class="grid sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 max-md:text-sm gap-6 lg:gap-10 max-lg:text-center max-lg:text-sm">
      <div
        class="flex flex-col items-center sm:max-lg:col-span-3 md:row-span-2 sm:space-x-5 lg:space-x-0 sm:max-lg:flex-row max-sm:justify-center"
      >
        <Logo class="max-lg:justify-center" />
        <FooterCompanyInfo />
      </div>

      <FooterAddress />
      <FooterWorkingHours />
      <FooterContacts />
      <FooterInformation />
      <FooterAbout />
      <FooterSocials />
    </div>
  </Section>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
