import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import {
  topListState
} from './atom'

import '!style-loader!css-loader!../styles/topList.css'

export default function TopList() {  

  const topList = useRecoilValue(topListState)

  return (
    <div id = 'films_box'>
      <ul id = 'nav_items'>
      {topList.length}
      </ul> 
    </div>
    )
}
