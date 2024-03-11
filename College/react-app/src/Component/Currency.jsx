import React, { useState } from "react";

export const Currency = () => {
  const [usd, setUsd] = useState(0);
  const [inr, setInr] = useState(0);
  let changeUSD = (e) => {
    setInr(e.target.value);
    setUsd(e.target.value * 82.92);
  };
  let changeINR = (e) => {
    setUsd(e.target.value);
    setInr(e.target.value / 82.92);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-25 gap-3">
          <h1>Currency</h1>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$ USD</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={inr}
              onChange={changeUSD}
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">₹ INR</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={usd}
              onChange={changeINR}
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
