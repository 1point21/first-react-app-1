import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// each component get its own file - import it here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
