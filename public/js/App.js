import React, {useEffect} from 'react'
import { RecoilRoot } from 'recoil'

import Navigation from './Navigation'
import Content from './Content'

import '!style-loader!css-loader!../styles/style.css'
import { handleMouseMove, handleClick, handleMouseDown, handleMouseUp } from './mouseHandler'

export default function App() {
  useEffect(() => {
    document.body.addEventListener('mousemove',handleMouseMove)
    document.body.addEventListener('click',handleClick)
    document.body.addEventListener('mousedown',handleMouseDown)
    document.body.addEventListener('mouseup',handleMouseUp)

    return () => {
      document.body.removeEventListener('mousemove',handleMouseMove)
      document.body.removeEventListener('click',handleClick)
      document.body.removeEventListener('mousedown',handleMouseDown)
      document.body.removeEventListener('mouseup',handleMouseUp)
    }
  }, [])

  return (
    <RecoilRoot>
      <div id = 'wrap'>
        <Navigation />
        <Content />
      </div>
    </RecoilRoot>
  )
}