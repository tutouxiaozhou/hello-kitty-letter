import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { registerBalooFont } from "./lib/font";
import "./styles/global.css";

registerBalooFont();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
