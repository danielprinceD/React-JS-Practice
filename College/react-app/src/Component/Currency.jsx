import React from "react";

export const Currency = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-25 gap-3">
          <h1>Currency</h1>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">₹ INR</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$ USD</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
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
