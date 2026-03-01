import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [count,setCount] = useState(0)
 const handleIncrease = () => {
    setCount(count +1)
  }

 const handleDecrease = () => {
    setCount(count -1)
  }

  const handleReset = () => {
    setCount(0)
  }
  return (
    <>
    <div className='cont'>
      <label>{count}</label>
    </div>
    <div className='btns'>
    <button className='inc' onClick={ handleIncrease }>+</button>
    <button className='dec' onClick={handleDecrease}>-</button>
    <button className='res' onClick={handleReset}>Clear</button>
    </div>
    </>
  )
}

export default App
