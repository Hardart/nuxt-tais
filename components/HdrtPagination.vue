<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const props = withDefaults(
  defineProps<{
    page: number
    total: number
    perPage: number
    showPages?: number
  }>(),
  {
    showPages: 5,
  }
)

const totalPages = computed(() => Math.ceil(props.total / props.perPage))

watch(
  () => props.page,
  () => {
    if (props.page == 1) {
      const query = { ...route.query }
      delete query.page
      router.push({ path: route.path, query })
    } else {
      router.push({ path: route.path, query: { ...route.query, page: props.page } })
    }
  }
)

const emit = defineEmits(['update:page'])
const onClick = (event: Event) => {
  if (!event.target) return
  const el = event.target as HTMLElement
  emit('update:page', el.innerText)
}
</script>
<template>
  <div class="w-full my-5">
    <nav class="flex justify-center space-x-3" v-if="totalPages > showPages + 2">
      <template v-if="page >= showPages">
        <button class="pagination" @click="onClick">1</button>
        <span class="px-2 py-1 cursor-default">...</span>
      </template>

      <template v-else>
        <button class="pagination" :class="page == i && 'active cursor-default'" v-for="i in showPages" @click="onClick">
          {{ i }}
        </button>
      </template>

      <template v-if="page >= showPages && page < totalPages - 2">
        <button class="pagination" @click="onClick">{{ page - 1 }}</button>
        <button class="pagination active cursor-default">{{ page }}</button>
        <button class="pagination" @click="onClick">{{ page + 1 }}</button>
      </template>

      <template v-for="n in totalPages" v-if="page >= totalPages - 2">
        <button class="pagination" :class="page == n && 'active cursor-default'" v-if="n > totalPages - 5" @click="onClick">
          {{ n }}
        </button>
      </template>

      <template v-if="page < totalPages - 2">
        <span class="px-2 py-1 cursor-default">...</span>
        <button class="pagination" :class="page == totalPages && 'active cursor-default'" @click="onClick">
          {{ totalPages }}
        </button>
      </template>
    </nav>
    <nav class="flex justify-center items-center space-x-3" v-else>
      <button class="pagination" :class="page == i && 'active'" v-for="i in totalPages" @click="onClick">{{ i }}</button>
    </nav>
  </div>
</template>
