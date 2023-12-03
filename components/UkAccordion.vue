<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <ul>
    <li>
      <div @click="isOpen = !isOpen" class="relative justify-between flex p-3 bg-slate-300">
        <p>How to keep my teeth healthy?</p>
        <div class="">
          <Icon name="heroicons:arrow-down" class="transition-transform ease-in-out duration-300" :class="isOpen && 'rotate-180'" />
        </div>
      </div>
      <TransitionExpand no-opacity>
        <div v-if="isOpen">
          <p class="m-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </TransitionExpand>
    </li>
    <li>
      <a class="uk-accordion-title">Item 2</a>
      <div class="uk-accordion-content">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          reprehenderit.
        </p>
      </div>
    </li>
    <li>
      <a class="uk-accordion-title">Item 3</a>
      <div class="uk-accordion-content">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat proident.
        </p>
      </div>
    </li>
  </ul>
</template>

<style></style>
