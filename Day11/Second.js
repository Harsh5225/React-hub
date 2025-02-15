import React from 'react'

const Second = ({f,fl}) => {
  return (
    <div>
      <button onClick={()=> fl(f-1)}>Decrement</button>
    </div>
  )
}

export default Second
