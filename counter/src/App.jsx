import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  // let counter = 0;

function addvalue() {
  setCount((prev) => (prev < 20 ? prev + 1 : prev));
}

function removeValue() {
  setCount((prev) => (prev > 0 ? prev - 1 : prev));
}
  return (
    <>
    <h1>Let see counter</h1>
    <h2>Count : {count}</h2>
    <button onClick={addvalue} >Add count</button>
    <button onClick={removeValue}>remove count</button>

    </>
  )
}

export default App
