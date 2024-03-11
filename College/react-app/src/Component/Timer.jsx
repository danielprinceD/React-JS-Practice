import { useEffect, useState } from "react";
export const Timer = () => {
  const [time, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    let starter = start
      ? (interval = setInterval(() => setTimer((prev) => prev + 1), 500))
      : clearInterval(interval);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <center>
        <h1>Timer</h1>
        <h2>{time % 10}</h2>
        <div className="d-flex justify-content-center gap-2">
          <button
            onClick={() => setStart(true)}
            className="btn btn-outline-success"
          >
            Start
          </button>
          <button
            onClick={() => setStart(false)}
            className="btn btn-outline-danger"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setTimer(0);
              setStart(false);
            }}
            className="btn btn-outline-warning"
          >
            Reset
          </button>
        </div>
      </center>
    </div>
  );
};
