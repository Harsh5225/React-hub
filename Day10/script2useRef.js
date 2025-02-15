import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [count, setcount] = useState(0);
  const money = useRef(0);
  return (
    <>
      <h1>Count is :{count}</h1>
      <div>
        <button onClick={() => setcount(count + 1)}>INC ++</button>
        <button onClick={() => setcount(count - 1)}>DEC --</button>
      </div>
      <h2>Money is:{money.current}</h2>
      <button
        onClick={() => {
          console.log(money);

          money.current = money.current + 1;
          console.log(money.current);
        }}
      >
        Increase MOney
      </button>
    </>
  );
}
root.render(<App />);
