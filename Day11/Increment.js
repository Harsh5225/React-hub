import { useContext } from "react"
import GlobalContext from "./AGlobal"
const Increment = () => {
  const {count,setcount}=useContext(GlobalContext)
  return (
    <>
    <h2>Counter is: {count}</h2>
    <button onClick={()=> setcount(count+1)} >Increment</button>
    </>
  )
}

export default Increment
