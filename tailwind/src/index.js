import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyGrid from "./MyGrid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <MyGrid />
  </>
);
