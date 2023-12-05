<template>
  <Section padding="large" :expand-right="true">
    <div class="flex flex-wrap">
      <div class="lg:pl-10 lg:-ml-10 lg:w-1/3 flex-grow flex items-center max-lg:justify-center max-lg:my-10">
        <div class="space-y-4">
          <CardsDescription
            section-title="Специалисты"
            title="Мы полностю нацелены на здоровье вашего тела"
            text="Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          />
          <div class="max-lg:text-center">
            <UiTaisButton text="Наша команда" to="/team" />
          </div>
        </div>
      </div>
      <div class="lg:pl-10 lg:w-2/3 flex-grow">
        <img src="/images/home-doctors.png" width="1270" height="729" loading="lazy" />
      </div>
    </div>
  </Section>
</template>
