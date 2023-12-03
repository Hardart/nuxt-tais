<script setup lang="ts">
defineProps(['title', 'text'])
</script>

<template>
  <div class="flex md:pl-4">
    <CardsBenefitsIcon />
    <div class="ml-4">
      <CardsBenefitsTitle :title="title" />
      <CardsBenefitsText :text="text" />
    </div>
  </div>
</template>
