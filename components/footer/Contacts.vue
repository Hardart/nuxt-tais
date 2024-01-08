<script setup lang="ts">
const contactData = ['tais58omolozhenie@yandex.ru', '8 952-190-68-89', '8 (8412) 68-88-89']
</script>

<template>
  <div>
    <FooterItemTitle title="контакты:" />
    <p class="text-zinc-700 font-light" v-for="data in contactData">{{ data }}</p>
  </div>
</template>

<style></style>
