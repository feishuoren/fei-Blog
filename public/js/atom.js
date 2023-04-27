import { atom, selector} from 'recoil'
import axios from 'axios'

export const navList = atom({
  key: 'navList',
  default: [
    {id: 1, title: 'Home', link: '/home'},
    {id: 2, title: 'Game', link: '/game'},
    {id: 3, title: 'TopList', link: '/topList'},
  ],
})

export const counter = atom({
  key: 'myCounter',
  default: 0,
})


export const timer = atom({
  key: 'myTimer',
  default: {
    redirectTime: 0, 
    domainLookupTime: 0, 
    connectTime: 0, 
    responseTime: 0, 
    domReadyTime: 0, 
    loadtime: 0, 
    whiteTime: 0
  },
})

export const topListState = atom({
  key: 'topListState',
  default: []
});

// export const topListState = selector({
//   key: 'topListState',
//   get: async () => {
//     const response = await axios.get('/getTopList')
//     return response.data;
//   },
// });