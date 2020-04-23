import React, { useState, Fragment } from 'react'


function HookCounter() {
  
   // two return values using destructuring        // assign initial value (0)
 const[ count, setCount ] = useState(0)

  return (
    <Fragment>
      <h1>Hello from Hook Counter!</h1>
      <button onClick={() => setCount( count + 1 ) }>Hook Count: { count }</button>
    </Fragment>
  )
}

export default HookCounter