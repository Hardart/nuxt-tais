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

  interface IService {
    title: string
    icon: string
    procedures: string[] | null
  }

  interface IDescCard {
    title: string
    text?: string
    subTitle?: string
  }

  interface IServiceData {
    list: IService[]
    desc: IDescCard
  }

  interface IAppSetting {
    service: IServiceData
    mainMenu: IMainMenu[]
  }

  interface IBenefit {
    title: string
    text: string
  }

  interface IMainMenu {
    title: string
    href: string
  }
}
