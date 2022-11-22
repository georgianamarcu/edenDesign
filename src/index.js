import { StrictMode, useState } from "react";
import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#canvas-r3f"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
