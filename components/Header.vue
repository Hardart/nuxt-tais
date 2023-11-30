<script setup lang="ts">
const { isOpen, toggleMenuState } = useMobileMenu()

watch(isOpen, () => {
  useHead({
    htmlAttrs: { class: isOpen.value ? 'overflow-clip' : '' },
  })
})
</script>
<template>
  <div>
    <Container class="flex items-center border-b h-20">
      <Logo class="max-w-[200px]" />
      <div class="flex items-center ml-auto space-x-8">
        <p class="flex max-md:hidden">8-952-190-68-89</p>
        <div class="flex items-center gap-2 max-lg:hidden">
          <div class="grid place-content-center font-bold text-white rounded-lg w-10 h-10 bg-blue-600">VK</div>
          <div class="grid place-content-center font-bold text-white rounded-lg w-10 h-10 bg-blue-900">FB</div>
          <div class="grid place-content-center font-bold text-white rounded-lg w-10 h-10 bg-gradient-to-b from-red-700 to-yellow-500">
            INS
          </div>
        </div>
        <div class="lg:hidden">
          <button @click="toggleMenuState"><Icon name="heroicons:bars-2-20-solid" size="30" /></button>
        </div>
      </div>
      <div
        class="fixed bg-sky-600 left-0 right-0 bottom-full top-20 transition-all duration-500 overflow-hidden"
        :class="isOpen && '!bottom-0'"
      >
        <div class="absolute inset-0 overflow-y-auto">
          <MobileMenu :close-handler="toggleMenuState" />
        </div>
      </div>
    </Container>
  </div>
</template>

<style></style>
