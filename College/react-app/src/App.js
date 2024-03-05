import logo from "./logo.svg";
import { useState } from "react";
let products = ["apple", "orange", "mango"];
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <center>
        <h1>Count Value : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Increement
        </button>
      </center>
    </div>
  );
}

export default App;
