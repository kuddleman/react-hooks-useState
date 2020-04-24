import React, { useState } from 'react'
import HookCounter from './HookCounter'

// When you have to update the state based on the previous state value,
// pass in a state setter 


function HookCounterTwo() {
  const initialCount = 0
  const[ count, setCount ] = useState( initialCount )
  return (
    <div>
      <h2>Hello from Hook Counter 2!</h2>
      Count: { count }
      <button onClick={ () => setCount( initialCount ) }>Reset</button>
      <button onClick={ () => setCount( prevCount => prevCount + 1 ) }>Increment</button>
      <button onClick={ () => setCount( prevCount => prevCount - 1 ) }>Decrement</button>
    </div>
  )
}

export default HookCounterTwo