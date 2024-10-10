"use client"
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(false);
  const [counter, setCounter] = useState(1);
  const handleClick =()=>{
    setCount(count => count + 1); 
    setAlert(alert => !alert); 
    setCounter(counter => counter + 1); 
    // React re-renders once at the end. This is batching!
  }

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h1 className={`${alert ? "bg-blue " : "bg-black"}`}>{count}</h1>
    </div>
  );
}