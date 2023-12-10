<script lang="ts" setup>
const { data: images } = await useFetch('/api/files')
</script>

<template>
  <Section>
    <ul class="grid grid-cols-4 gap-5">
      <li v-for="image in images"><img :src="image" alt="" width="300" height="300" /></li>
    </ul>
  </Section>
</template>

<style scoped></style>
