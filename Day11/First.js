import React from 'react'
import Second from './Second'
const First = ({c,d}) => {
  return (
    <div>
      <h1>Hello count is: {c}</h1>
      <button onClick={()=>d(c+1)}>if you want to increase count click</button>
      <Second f={c} fl={d}/>
    </div>
  )
}

export default First
