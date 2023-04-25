import { useState } from 'react'
import './App.css'

function App() {
  // useState is React function that returns an array with two elements: 
  // the current state value , and a function that we can use to update the state
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
