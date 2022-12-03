import { atom, selector} from 'recoil'

export const navList = atom({
  key: 'navList',
  default: [
    {id: 1, title: 'home', link: '/home'},
    {id: 2, title: 'nav1', link: 'nav1'},
    {id: 3, title: 'nav2', link: 'nav2'},
  ],
})

export const counter = atom({
  key: 'myCounter',
  default: 0,
})
