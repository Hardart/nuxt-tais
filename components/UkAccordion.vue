<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    multi?: boolean
    items: { title: string; body: string }[]
  }>(),
  {
    multi: false,
  }
)

const itemsState = ref<{ [key: number]: boolean }>({})
onMounted(() => {
  for (let i = 0; i < props.items.length; i++) {
    itemsState.value[i] = false
  }
})

const toggleItemState = (i: number) => {
  if (props.multi) return (itemsState.value[i] = !itemsState.value[i])
  Object.keys(itemsState.value).forEach((key, index) => {
    itemsState.value[index] = i == index ? !itemsState.value[index] : false
  })
}
</script>

<template>
  <ul class="grid grid-cols-1 divide-y">
    <li v-for="(item, index) in items" class="py-4">
      <div @click="toggleItemState(index)" class="relative justify-between flex px-3 py-3 cursor-pointer">
        <h4 class="text-xl font-medium">{{ item.title }}</h4>
        <div>
          <Icon
            name="heroicons:arrow-down"
            class="transition-transform ease-in-out duration-300 mx-3"
            :class="itemsState[index] && 'rotate-180'"
          />
        </div>
      </div>
      <TransitionExpand no-opacity>
        <div v-if="itemsState[index]" class="mt-2 bg-stone-100/10">
          <p class="px-3">{{ item.body }}</p>
        </div>
      </TransitionExpand>
    </li>
  </ul>
</template>

<style></style>
