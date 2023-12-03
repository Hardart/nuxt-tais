<script setup lang="ts">
defineProps<{
  benefitList: IBenefit[]
}>()
</script>

<template>
  <div class="flex max-md:flex-col max-md:items-center" v-for="{ title, text } in benefitList">
    <CardsBenefits :title="title" :text="text" />
  </div>
</template>

<style></style>
