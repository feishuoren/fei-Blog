import React, {useEffect} from 'react'
import { RecoilRoot } from 'recoil'

import Navigation from './Navigation'
import Content from './Content'

import '!style-loader!css-loader!../styles/style.css'
import {handleMouseMove} from './mouseHandler'

export default function App() {
  useEffect(() => {
    document.body.addEventListener('mousemove',handleMouseMove)

    return () => {
      document.body.removeEventListener('mousemove',handleMouseMove)
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