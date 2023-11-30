const isOpen = ref(false)
const isOverDropbar = ref(false)
const isOverMenu = ref(false)

export const useMenu = () => {
  const toggleMenuState = () => {
    isOpen.value = !isOpen.value
  }
  const onEnterMenuItem = () => {
    isOverMenu.value = true
    isOpen.value = true
  }

  const onEnterDropbar = () => {
    isOverDropbar.value = true
    isOpen.value = true
  }

  const onLeaveMenuItem = () => {
    setTimeout(() => {
      isOverMenu.value = false
      if (isOverDropbar.value) return
      isOpen.value = false
    }, 100)
  }

  const onLeaveDropbar = () => {
    setTimeout(() => {
      isOverDropbar.value = false
      if (isOverMenu.value) return
      isOpen.value = false
    }, 100)
  }
  return { isOpen, toggleMenuState, onEnterDropbar, onLeaveMenuItem, onLeaveDropbar, onEnterMenuItem }
}
