import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

// *abb function global hogaya baar baar nahi banega on re rendering
// *aur hum useCallback kar sakte inside
// !function fibonacci(n){
//   if(n<=1) return n;
//   return fibonacci(n-1)+fibonacci(n-2);
//  }

function Counter(){
 const [count,setcount]=useState(0);
 const [number,setnumber]=useState(0);


 // *BY USING USECALLBACK
 const fibonacci=useCallback((n)=>{
  if(n<=1) return n;
  return fibonacci(n-1)+fibonacci(n-2);
 },[]);
 

const result=useMemo(()=>fibonacci(number),[number]); 
// A memoized value 
// Memoizes values to avoid unnecessary recalculations
// Used for optimizing expensive calculations
// jab number ki value change hogi tabbhi calculate karne ki jaroorat hogi

  return(
    <>
    <h1>Count is :{count}</h1>
    <div>
    <button onClick={()=> setcount(count+1)}>INC ++</button>
    <button onClick={()=> setcount(count-1)}>DEC --</button>
    </div>
    <div className='fibo'>
      <h2>FIbbonaccci Number is: {result}</h2>
      <input type='number' value={number} onChange={(e)=> setnumber(e.target.value)}></input>
    </div>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>)


