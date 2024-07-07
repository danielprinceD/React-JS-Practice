import React, { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        return state + action.value;

      case "DECREASE":
        return state - action.value;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h2>Use Reduce - {count}</h2>
        <button onClick={() => dispatch({ type: "INCREASE", value: 2 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", value: 2 })}>
          -
        </button>  
      </div>
    </>
  );
};

export default App;
