<script lang="ts" setup>
const { data: images } = await useFetch('/api/files')
</script>

<template>
  <div>
    <ul class="grid grid-cols-4 gap-5">
      <li v-for="image in images"><img :src="image" alt="" width="300" height="300" /></li>
      <!-- <li><img src="~/assets/images/avatar.jpeg" alt="" /></li> -->
    </ul>
  </div>
</template>

<style scoped></style>
