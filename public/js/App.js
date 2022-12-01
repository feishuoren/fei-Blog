import React,{useState} from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CountWrap />
    </RecoilRoot>
  );
}

function CountWrap() {
  const [count,setCount] = useState(0);

  return <div>
    <p>current count: {count} ~</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
}

export default App;
