import axios from 'axios'

import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  topListState
} from './atom'

export default function useWebScraper(){
  const [topList, setTopList] = useRecoilState(topListState)
  
  return function(){
    let data
    axios.get('/getTopList')
    .then((response)=>{
      const isSuccess = response.status == 200;
      data = response.data
      if (isSuccess) {
        console.log(response) 
        setTopList(response.data)
      }
    })
    .catch((response)=>{
      console.log(response);
    })
  }
};

