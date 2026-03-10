import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  // let counter = 0;

  function addvalue(){
    setCount(count + 1)
    console.log("clicked", count);
  }
  function removeValue(){
    setCount(count - 1);
    
  }
  return (
    <>
    <h1>Let see counter</h1>
    <h2>Count : {count}</h2>
    <button onClick={addvalue}>Add count</button>
    <button onClick={removeValue}>remove count</button>

    </>
  )
}

export default App
