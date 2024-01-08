export default defineEventHandler(event => {
  const menuList = [
    // { title: 'Прайс', href: '/price' },
    { title: 'Услуги', href: '/service' },
    { title: 'О нас', href: '/about' },
    { title: 'Сотрудники', href: '/doctors' },
    // { title: 'Контакты', href: '/contacts' },
    { title: 'Новости', href: '/blog' },
  ]
  return menuList
})
