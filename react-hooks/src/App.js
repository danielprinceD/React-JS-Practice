import React, { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "INCREASE":
        return state + 1;

      case "DECREASE":
        return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h2>Use Reduce - {count}</h2>
        <button onClick={() => dispatch("INCREASE")}>+</button>
        <button onClick={() => dispatch("DECREASE")}>-</button>
      </div>
    </>
  );
};

export default App;
