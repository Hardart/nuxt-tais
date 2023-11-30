export {}

declare global {
  type Maybe<T> = T | null | undefined

  interface IProvideMenuState {
    location: string
    updateLocation: (location: string) => void
  }

  interface ICardLink {
    type: 'link'
    href: string
  }

  interface ICardText {
    type: 'text'
  }
}
