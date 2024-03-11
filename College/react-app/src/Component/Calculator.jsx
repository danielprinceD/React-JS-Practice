import React, { useState } from "react";

export const Calculator = () => {
  const [calc, setCalc] = useState("");
  let calculate = (e) => {
    setCalc(e.target.value);
  };
  let calculating = () => {
    setCalc((prev) => eval(prev));
  };
  return (
    <div className="d-flex align-items-center gap-3 flex-column">
      <h1>Calculator</h1>
      <div class="input-group mb-3 d-flex w-25">
        <div class="input-group-prepend">
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={calculating}
          >
            Calculate
          </button>
        </div>
        <div class="input-group-prepend"></div>
        <input
          type="text"
          class="form-control"
          aria-describedby="basic-addon1"
          value={calc}
          onChange={calculate}
        />
      </div>
    </div>
  );
};
