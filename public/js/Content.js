import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  counter
} from './atom'
import '!style-loader!css-loader!../styles/content.css'

import Game from './Game'

export default function Content() {
  const [count,setCount] = useRecoilState(counter)
  const incrementByOne = () => setCount(count + 1)
  
  return (
    <div id = 'content_box'>
      <p>current count: {count} ~</p>
      <button onClick={incrementByOne}>
        Click me
      </button>
      <Game />
    </div>
  )
}