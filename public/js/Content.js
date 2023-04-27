import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  counter,
} from './atom'
import '!style-loader!css-loader!../styles/content.css'

import Game from './Game'
import TopList from './TopList'
import useWebScraper from './creeper'

export default function Content() {
  const [count,setCount] = useRecoilState(counter)
  const incrementByOne = () => setCount(count + 1)
  const getTopList = useWebScraper()

  useEffect(() => {
    
    return () => {

    }
  }, [])

  
  return (
    <div id = 'content_box'>
      <p>current count: {count} ~</p>
      <button onClick={incrementByOne}>
        Click me
      </button> 
      <button onClick={() => getTopList()}>
        getTopList
      </button>     
      <TopList />
      <Game />
    </div>
  )
}