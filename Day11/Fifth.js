import React,{useContext} from 'react'
import GlobalContext from './AGlobal'

const Fifth = () => {
  const data=useContext(GlobalContext)
  return (
    <div>
      <h1>Main huu ... {data}</h1>
    </div>
  )
}

export default Fifth
