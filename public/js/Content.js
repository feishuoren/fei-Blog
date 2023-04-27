import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  counter,
} from './atom'
import '!style-loader!css-loader!../styles/content.css'

import Game from './Game'
import TopList from './TopList'
import NotFound from './NotFound'

export default function Content() {

  return (
    <div id = 'content_box'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="topList" element={<TopList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>   
    </div>
  )
}

function Home() {
  const [count,setCount] = useRecoilState(counter)
  const incrementByOne = () => setCount(count + 1)

  return (
    <div>
      <p>current count: {count} ~</p>
        <button onClick={incrementByOne}>
          Click me
        </button> 
    </div>
  )
}
