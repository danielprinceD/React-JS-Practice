import { useState } from "react";

export default function Task1() {
  const [count, setCount] = useState(0);
  <div className="App">
    <center>
      <h1>Count Value : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increement</button>
    </center>
  </div>;
}
