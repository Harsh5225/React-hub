import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

const root=ReactDOM.createRoot(document.getElementById('root'));

// * start,stop,reset

function Stopwatch(){
  const [time,setTime]=useState(0);
  const intervalRef=useRef(null);
  function start(){
    intervalRef.current= setInterval(()=>{
      setTime((prevTime)=>prevTime+1)
    },1000);
  }
  function stop(){
    console.log(intervalRef)
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }
  function reset(){
    clearInterval(intervalRef.current)
    intervalRef.current=null;
    setTime(0);
  }
  return(
    <div className="stopwatch-container">
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <div className="button-container">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={reset} className="reset-button">Reset</button>
      </div>
    </div>
  </div>
  )
}

root.render(<Stopwatch/>)