import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// react에서는 입구가 index.js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
