import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyGrid from "./MyGrid";
import Layout from "./Layout";
import Borders from "./Borders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Borders />
    <Layout />
    <App />
    <MyGrid />
  </>
);
