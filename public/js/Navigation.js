import React from 'react'
import { useRecoilValue } from 'recoil'
import {
  navList
} from './atom'
import '!style-loader!css-loader!../styles/navigation.css'
import Performance from './Performance.js'

export default function Navigation() {
  const names = useRecoilValue(navList)
  const listItems = names.map((navItem) => 
    <ListItem key = {navItem.id} item = {navItem} />
  )

  return (
    <div id = 'nav_box'>
      <Performance />
      <ul id = 'nav_items'>
        {listItems}
      </ul> 
     </div>
  )
}

function ListItem(props) {
  return <li className = 'nav_item'>{props.item.title}</li>
}
