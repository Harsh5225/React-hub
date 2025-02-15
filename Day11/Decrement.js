import React from "react";
import { useContext } from "react"
import GlobalContext from "./AGlobal"
const Decrement = (props) => {
  // console.log(props)
  const data=useContext(GlobalContext)

  const { countProps: count, setCount: setcount } = props;
  // console.log(count,setcount)
  return (
    <>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </>
  );
};

export default Decrement;
