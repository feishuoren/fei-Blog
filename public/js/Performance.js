import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import '!style-loader!css-loader!../styles/performance.css'
import {
  timer
} from './atom'

function useGetPerformancetiming(performanceTiming,setTimer) {
  let timing = {}


  setTimeout(function(){
    let performance = window.performance || window.msPerformance || window.webkitPerformance
    if (!performance) {
      console.log('不支持')
    }
    let t = performance.timing
        // 重定向耗时
    timing.redirectTime = t.redirectEnd - t.redirectStart
        // DNS查询耗时
    timing.domainLookupTime = t.domainLookupEnd - t.domainLookupStart
        // TCP连接耗时
    timing.connectTime = t.connectEnd - t.connectStart
        // HTTP请求耗时
    timing.responseTime = t.responseEnd - t.responseStart
        // 解析DOM树耗时
    timing.domReadyTime = t.domComplete - t.domInteractive
        // 白屏时间
    timing.whiteTime = t.responseStart - t.navigationStart
        // 页面加载完成时间
    timing.loadtime = t.loadEventEnd - t.navigationStart

    setTimer(timing)

  },2000)

}

export default function Performance() {
  const [performanceTiming,setTimer] = useRecoilState(timer)

  useEffect(() => {
    useGetPerformancetiming(performanceTiming,setTimer)
  },[])
  
  return (
    <div id = 'performance'>
      <span>重定向耗时：{performanceTiming.redirectTime}</span><br />
      <span>DNS查询耗时：{performanceTiming.domainLookupTime}</span><br />
      <span>TCP连接耗时：{performanceTiming.connectTime}</span><br />
      <span>HTTP请求耗时：{performanceTiming.responseTime}</span><br />
      <span>解析DOM树耗时：{performanceTiming.domReadyTime}</span><br />
      <span>白屏时间：{performanceTiming.whiteTime}</span><br />
      <span>页面加载完成时间：{performanceTiming.loadtime}</span><br />
    </div>
    )
}