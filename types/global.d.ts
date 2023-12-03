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

  interface IServiceData {
    title: string
    icon: string
    procedures: string[] | null
  }

  interface IDescCard {
    title: string
    text?: string
    subTitle?: string
  }

  interface IMainPageData {
    list: IServiceData[]
    desc: IDescCard
  }

  interface IBenefit {
    title: string
    text: string
  }
}
