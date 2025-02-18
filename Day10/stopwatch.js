import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// * start,stop,reset

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [disable,Setdisable]=useState(false);
  const intervalRef = useRef(null);
  function start() {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    Setdisable(true);
  }
  function stop() {
    // console.log(intervalRef.current)
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log(intervalRef);
    Setdisable(false);
  }
  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    Setdisable(false);
  }
  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="time-display">{time}s</div>
        <div className="button-container">
          <button onClick={start} disabled={disable} className="start-button">
            Start
          </button>
          <button onClick={stop} disabled={!disable} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

root.render(<Stopwatch />);
