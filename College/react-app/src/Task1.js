import React from "react";
import { useState } from "react";
import "./task.css";
export const Task1 = () => {
  const [count, setCount] = useState(0);
  let Increment = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  };
  let Decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  let reset = () => {
    setCount(0);
  };
  return (
    <div>
      <center>
        <h1>Task 1</h1>
        <br />
        <h2>Count --- {count} </h2>
        <div className="task1">
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </center>
    </div>
  );
};
