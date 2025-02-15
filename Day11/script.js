import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import Increment from "./Increment";
import Decrement from "./Decrement";
import First from "./First";
import Third from "./third";
import GlobalContext from "./AGlobal";
import { useContext } from "react";
import Fifth from "./Fifth";

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
    <Fifth/>
      <GlobalContext.Provider value={{ count, setcount }}>
        <h1>Hello Dupp!!</h1>
        <Increment countProps={count} setCount={setcount} />
        {/* <Decrement countProps={count} setCount={setcount} />
        <First c={count} d={setcount} />
        <Third /> */}
      </GlobalContext.Provider>
    </>
  );
}

root.render(<App />);
