import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // function inc(){
  //   setCount(count+1);

  // react itself do the dom manipiulation with the help of functionality
  // count=count+1;
  // document.querySelector('h1').innerText=`Count is ${count}`
  // }
  // function dec(){
  //   setCount(count-1);
  // }

  return (
    <div className="counter">
      <h1>Count is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />);
