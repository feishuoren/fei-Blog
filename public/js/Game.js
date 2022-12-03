import React, { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  counter
} from './atom'
import '!style-loader!css-loader!../styles/game.css'
import createGame from './createGame'


export default function Game() {  

  return (
    <div id = 'game_box'>
      <div>使用上下左右键控制小老鼠躲避捕鼠夹</div>
      <button onClick={createGame}>
        点击开始游戏
      </button>
      <canvas id='canvas' width="1000" height="500" />
    </div>
  )
}