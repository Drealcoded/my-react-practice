import React, { useState } from 'react'

function InpChange() {
    const [inp, setInp] = useState();


    function handleChange(e) {
        setInp (e.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{inp}</p>
    </div>
  )
}

export default InpChange
