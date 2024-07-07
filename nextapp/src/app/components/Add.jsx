"use client";
import React from "react";
const Add = () => {
  return (
    <div>
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
