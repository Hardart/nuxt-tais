const parentEl = ref<HTMLElement | null | undefined>(null)
let timerId: number | undefined = undefined
function closeWithDelay(isOpen: Ref<boolean>) {
  timerId = window.setTimeout(() => {
    if (parentEl.value?.dataset.menu == 'service' && typeof timerId !== 'undefined') return clearTimeout(timerId)
    isOpen.value = false
  }, 100)
}
export const useMenu = () => {
  const isOpen = useState<boolean>('mainMenu') || ref(false)

  const mainMenu = {
    close() {
      parentEl.value = null
      closeWithDelay(isOpen)
    },

    open(el?: HTMLElement | null) {
      parentEl.value = el

      if (parentEl.value?.dataset.menu == 'service') isOpen.value = true
    },
  }

  return { isOpen, mainMenu }
}
