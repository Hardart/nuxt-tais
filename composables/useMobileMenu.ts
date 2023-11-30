const isOpen = ref(false)
export const useMobileMenu = () => {
  const toggleMenuState = () => {
    isOpen.value = !isOpen.value
  }
  return { isOpen, toggleMenuState }
}
