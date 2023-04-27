import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import '!style-loader!css-loader!../styles/topList.css'
import {
  topListState
} from './atom'

import useWebScraper from './creeper'

export default function TopList() {  

  const topList = useRecoilValue(topListState)
  const getTopList = useWebScraper()

  return (
    <div id = 'films_box'>
      <button onClick={() => getTopList()}>getTopList</button> 
      <ul id = 'nav_items'>{topList.length}</ul> 
    </div>
    )
}
