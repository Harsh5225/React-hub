import React from 'react'
import { useContext } from 'react'
import { Data } from '../App'
const ComponentB = () => {
  const d=useContext(Data)
  return (
    <div>
      <h1>ComponentB</h1>
      <h2>{d}</h2>
    </div>
  )
}

export default ComponentB
