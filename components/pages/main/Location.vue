<script setup lang="ts"></script>
<template>
  <Section padding="large" class="!pt-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-20">
      <div class="h-96 w-full">
        <YaMap class="h-full" />
      </div>
      <div class="grid sm:grid-flow-col grid-cols-1 sm:grid-cols-2 max-lg:gap-x-10 gap-x-2 py-5 max-sm:text-center">
        <div>
          <CardsDescriptionTitle title="Public Transport" size="h4" class="font-medium tracking-wider mb-4" />
          <CardsDescriptionText text="Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed." class="font-light" />
        </div>
        <div>
          <CardsDescriptionTitle title="Parking" size="h4" class="font-medium tracking-wider mb-4" />
          <CardsDescriptionText text="Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed." class="font-light" />
        </div>
        <div class="grid row-span-2">
          <div>
            <CardsDescriptionTitle title="Emergency Service" size="h4" class="font-medium tracking-wider mb-4" />
            <div>
              <div>
                <p class="font-semibold mt-4">Адрес:</p>
                <p class="text-zinc-700 font-light">г. Пенза</p>
                <p class="text-zinc-700 font-light">ул. Мира, д. 11</p>
              </div>
              <div>
                <p class="font-semibold mt-4">Время работы:</p>
                <p class="text-zinc-700 font-light">Пн-Пт: с 9:00 до 18:00</p>
              </div>
              <div>
                <p class="font-semibold mt-4">Телефон:</p>
                <p class="text-zinc-700 font-light">8 (8412) 68-88-89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
