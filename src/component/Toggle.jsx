import React from 'react'
import { useState } from 'react'

function Toggle () {
    const [bgColor, setbgColor] = useState(true);
  return (
    <div>
      <h1 style={{backgroundColor:bgColor ? 'blue' : 'orange', color:'#fff'}}>Hello Welcome SQI</h1>

      <button onClick={()=> setbgColor(!bgColor)}className='border px-2 py-3'>Toggle</button>
    </div>
  ) 
}

export default Toggle
 