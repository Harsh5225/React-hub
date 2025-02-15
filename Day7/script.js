import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/components/Colorful";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Counter is :{count}</h1>
        <button onClick={() => setCount(count + 1)}>++</button>
      </div>
      <Colorful />
    </>
  );
}

root.render(<Main />);
