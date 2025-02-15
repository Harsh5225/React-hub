import React from 'react'
import { useContext } from 'react'
import { Data } from '../App'
const ComponentA = () => {
  const userData=useContext(Data)
  return (
    <div>
      <h1>{Data}</h1>
    </div>
  )
}

export default ComponentA
